import api from 'utils/api';

const searchProjects = async (query) => {
  const req = api
    .get(`/projects`, {
      params: {
        ...query,
      },
    })
    .then(({ data }) => data);
  const { meta, data } = await req;
  return { meta, data };
};

const getProjectTemplate = async (id) => {
  const req = api.get(`/projects/${id}`).then(({ data }) => data.data);
  return await req;
};

const getProjectFilters = async (params = []) => {
  const req = api
    .get(`/projects/filters`, {
      params: {
        ...params,
      },
    })
    .then(({ data }) => data);

  const data = await req;
  return data;
};

const saveProject = async (data) => {
  const req = api.post('/projects', data).then(({ data }) => data.data);
  return await req;
};

const calculateProjectMD = async (data) => {
  const req = api.post('/projects/calculate-project-mds', data).then(({ data }) => data.data);
  return await req;
};

export { calculateProjectMD, getProjectTemplate, getProjectFilters, saveProject, searchProjects };
// const createUser = async (data) => {
//   const req = api.post('/users', data).then(({ data }) => data.data);
//   return await req;
// };

// const retrieveUser = async (id) => {
//   const req = api.get(`/users/${id}`).then(({ data }) => data.data);
//   return await req;
// };

// const updateUser = async (id, data) => {
//   const req = api.put(`/users/${id}`, data).then(({ data }) => data.data);
//   return await req;
// };

// const deleteUser = async (id) => {
//   const req = api.delete(`/users/${id}`).then(({ data }) => data);
//   const { deleted } = await req;
//   return deleted;
// };

// export { searchUsers, createUser, retrieveUser, updateUser, deleteUser };
