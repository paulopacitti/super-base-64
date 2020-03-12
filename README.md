# super-base-64

![logo](https://i.imgur.com/4VmNdon.png)

- Simple *one-function-library* to encode a **Blob image** in `base64`;
- **Promise based** (just use `async/await` to use sync, don't panic);
- Works with the **Browser API**;

### Install

```bash
npm install super-base-64
```

### Usage
- *Async/Await* style:

```javascript
import superBase64 from 'super-base-64';

mammaMia = async (file) => {
  let itsAMeMario  = await superBase64(file);
  console.log(itsAMeMario); // logs the image file encoded in base64
}
```

- Promise style:

```javascript
import superBase64 from 'super-base-64';

mammaMia = (file) => {
  superBase64(file).then((encoded) => console.log(encoded)); // logs the image file encoded in base64
}
```
