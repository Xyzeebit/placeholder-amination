# Placeholder Amination

## Input placeholder animation

![input placehoder animation](https://res.cloudinary.com/xyzeebit/image/upload/v1655186432/20220613_082301_seadbq.gif)

### How to use

To create a placeholder animation input,  copy the code below to your work

#### HTML
```HTML
    <div class="ph_input-group">
      <input type="text" id="ph_input" class="ph_input" />
      <label for="input" id="ph_input-label">
        Placeholder
      </label>
    </div>
```

#### CSS

```css
.ph_input-group {
  position: relative;
}
.ph_input {
  height: 40px;
  width: 300px;
  padding-left: 15px;
  outline-color: black;
}
.ph_input-group label {
  position: absolute;
  color: grey;
  transition: all 300ms ease-in-out;
  top: 16px;
  left: 10px;
  font-size: 12px;
  background: #fff;
  padding: 0 3px 0 3px;
}
```

#### JS

```js
const input = document.getElementById('ph_input');
input.addEventListener('focus', handleFocus);
input.addEventListener('blur', handleBlur);

function handleFocus(e) {
  let placeholder = document.getElementById('ph_input-label');
  placeholder.style.top = '-6px';
  placeholder.style.left = '10px';
  placeholder.style.fontWeight = 400;
  placeholder.style.paddingLeft = '3px';
  placeholder.style.color = 'inherit';
  placeholder.style.fontSize = '12px';
  
  removeEventListener('focus', handleFocus);
}

function handleBlur(e) {
  let placeholder = document.getElementById('ph_input-label');
  if(e.target.value == "") {
    placeholder.style.top = '16px';
    placeholder.style.color = 'grey';
  } else {
    placeholder.style.top = '-22px';
    placeholder.style.left = '0';
    placeholder.style.paddingLeft = 0;
    placeholder.style.fontWeight = 700;
    placeholder.style.color = '#000';
    placeholder.style.fontSize = '16px';
  }
  
  removeEventListener('blur', handleBlur);
}
```