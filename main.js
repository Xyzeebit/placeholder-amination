let input = document.getElementById('input');
input.addEventListener('focus', handleFocus);
input.addEventListener('blur', handleBlur);

function handleFocus(e) {
  let placeholder = document.getElementById('input-label');
  placeholder.style.top = '-6px';
  placeholder.style.left = '10px';
  placeholder.style.fontWeight = 400;
  placeholder.style.paddingLeft = '3px';
  placeholder.style.color = 'inherit';
  placeholder.style.fontSize = '12px';
  
  removeEventListener('focus', handleFocus);
}

function handleBlur(e) {
  let placeholder = document.getElementById('input-label');
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
