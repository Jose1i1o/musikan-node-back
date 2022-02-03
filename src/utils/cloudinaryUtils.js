function getPublicId(url) {
  const splitedURL = url.split('/');
  console.log(splitedURL);
  const lastItems = splitedURL.splice(7).join("/");
  console.log(lastItems);
  let publicId = lastItems.split(".")[0];
  console.log(publicId);

  return publicId;
}

module.exports = { getPublicId }

