import actionTypes from '../constants/actionTypes'
import api from '../utils/api'
import Constants from '../constants'

const {
  API: { PROJECT, CANVAS },
} = Constants

const canvasColor = () => {
  var letters = '0123456789ABCDEF'
  var color = '#'
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

export function fetchData(project_id) {
  let url = PROJECT
  if (project_id !== undefined) {
    url = url + '/' + project_id
  }
  return dispatch => api.get(`${url}`).then(resp => dispatch(updateProjects(resp.data.data)))
}

export function sendInvites({ id, shared_with }) {
  return dispatch =>
    api
      .put(`${PROJECT}/${id}`, {
        shared_with,
      })
      .then(resp => dispatch(refreshData(resp.data.data)))
}

export function createProject(project) {
  const formData = new FormData()
  formData.append('title', project.title)
  // formData.append('image', project.image, project.image.name)
  // if (project.parentId !== undefined && project.parentId !== null) {
  //   formData.append('parent_id', project.parentId)
  // }

  /*if (project.shared_with.length > 0) {
    formData.append('shared_with', JSON.stringify(project.shared_with))
  }*/
  return dispatch =>
    api
      .post(`${PROJECT}`, formData, { headers: { 'Content-Type': 'multipart/form-data' } })
      .then(resp => dispatch(createdProject(resp.data.data)))
}

export function createCanvas(canvas, project_id) {
  return dispatch =>
    api
      .post(`${CANVAS}`, {
        project_id,
        ...canvas,
        bg_color: canvasColor(),
      })
      .then(resp =>
        dispatch({
          type: actionTypes.CREATE_CANVAS,
          canvas: resp.data.data,
        }),
      )
}

export function updateCanvas(canvas) {
  return dispatch =>
    api.put(`${CANVAS}/${canvas.id}`, canvas).then(resp =>
      dispatch({
        type: actionTypes.UPDATE_CANVAS,
        canvas: resp.data.data,
      }),
    )
}

export function deleteCanvas(canvasId) {
  return dispatch =>
    api.delete(`${CANVAS}/${canvasId}`).then(() =>
      dispatch({
        type: actionTypes.DELETE_CANVAS,
        id: canvasId,
      }),
    )
}

export function updateProject(project) {
  return dispatch =>
    api
      .put(`${PROJECT}/${project.id}`, { title: project.title })
      .then(resp => dispatch({ type: actionTypes.CHANGE_PROJECT, project: resp.data.data }))
}

export function deleteProject(project_id) {
  return dispatch =>
    api.delete(`${PROJECT}/${project_id}`).then(resp => {
      dispatch(refreshData(resp.data.data))
      dispatch({ type: actionTypes.DELETE_PROJECT })
    })
}

export function setActiveProject(project) {
  return {
    type: actionTypes.SET_ACTIVE_PROJECT,
    project,
  }
}

const updateProjects = projects => {
  return { type: actionTypes.UPDATE_PROJECTS, projects }
}

const createdProject = project => ({
  type: actionTypes.CREATED_PROJECT,
  project,
})

const refreshData = () => fetchData()
