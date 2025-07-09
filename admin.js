const dropArea = document.getElementById('drop-area');
const fileInput = document.getElementById('imageInput');
const imageDataInput = document.getElementById('imageData');
const preview = document.getElementById('preview');

// Click to open file selector
dropArea.addEventListener('click', () => fileInput.click());

// Handle file selection
fileInput.addEventListener('change', handleFile);

// Drag & Drop handlers
dropArea.addEventListener('dragover', e => {
  e.preventDefault();
  dropArea.style.background = "#dbefff";
});
dropArea.addEventListener('dragleave', () => {
  dropArea.style.background = "#f0f8ff";
});
dropArea.addEventListener('drop', e => {
  e.preventDefault();
  dropArea.style.background = "#f0f8ff";
  const file = e.dataTransfer.files[0];
  if (file) {
    fileInput.files = e.dataTransfer.files;
    handleFile({ target: { files: [file] } });
  }
});

// Convert file to Base64
function handleFile(e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(event) {
    imageDataInput.value = event.target.result; // store base64
    preview.src = event.target.result;
    preview.style.display = "block";
  };
  reader.readAsDataURL(file);
}
