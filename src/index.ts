const superBase64 = (file: Blob) => {
  return new Promise((resolve: Function, reject: Function) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

export default superBase64;