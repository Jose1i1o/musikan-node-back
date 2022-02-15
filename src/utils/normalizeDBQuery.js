async function normalizeDbQuery(promise) {
  let result = {
    data: null,
    error: null,
  };

  try {
    const data = await promise;
    result.data = data;
  } catch (err) {
    result.err = err.message;
  }
  return result;
}

module.exports = normalizeDbQuery;
