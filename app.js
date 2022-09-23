// https://www.omnicalculator.com/health/reticulocyte-count

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const absolutereticulocytecountRadio = document.getElementById('absolutereticulocytecountRadio');
const hematocritRadio = document.getElementById('hematocritRadio');
const reticulocytesRadio = document.getElementById('reticulocytesRadio');

let absolutereticulocytecount;
let hematocrit = v1;
let reticulocytes = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

absolutereticulocytecountRadio.addEventListener('click', function() {
  variable1.textContent = 'Hematocrit';
  variable2.textContent = 'Reticulocytes';
  hematocrit = v1;
  reticulocytes = v2;
  result.textContent = '';
});

hematocritRadio.addEventListener('click', function() {
  variable1.textContent = 'Absolute reticulocyte count';
  variable2.textContent = 'Reticulocytes';
  absolutereticulocytecount = v1;
  reticulocytes = v2;
  result.textContent = '';
});

reticulocytesRadio.addEventListener('click', function() {
  variable1.textContent = 'Absolute reticulocyte count';
  variable2.textContent = 'Hematocrit';
  absolutereticulocytecount = v1;
  hematocrit = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(absolutereticulocytecountRadio.checked)
    result.textContent = `Absolute reticulocyte count = ${computeabsolutereticulocytecount().toFixed(2)}`;

  else if(hematocritRadio.checked)
    result.textContent = `Hematocrit = ${computehematocrit().toFixed(2)}`;

  else if(reticulocytesRadio.checked)
    result.textContent = `Reticulocytes = ${computereticulocytes().toFixed(2)}`;
})

// calculation

function computeabsolutereticulocytecount() {
  return (Number(hematocrit.value) * Number(reticulocytes.value)) / 45;
}

function computehematocrit() {
  return (Number(absolutereticulocytecount.value) * 45) / Number(reticulocytes.value);
}

function computereticulocytes() {
  return (Number(absolutereticulocytecount.value) * 45) / Number(hematocrit.value);
}