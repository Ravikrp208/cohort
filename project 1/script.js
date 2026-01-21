// Centralized state management
let state = {
  elements: [], // Array of element objects
  selectedId: null, // ID of selected element
  nextId: 1, // For unique IDs
  isDragging: false,
  isResizing: false,
  dragOffset: { x: 0, y: 0 },
  resizeHandle: null,
  resizeStart: { x: 0, y: 0, width: 0, height: 0 },
};

// DOM references
const canvas = document.getElementById("canvas");
const layers = document.getElementById("layers");
const properties = document.getElementById("properties");
const addRectBtn = document.getElementById("add-rect");
const addTextBtn = document.getElementById("add-text");
const exportJsonBtn = document.getElementById("export-json");
const exportHtmlBtn = document.getElementById("export-html");

// Utility functions
function createElement(
  type,
  x = 100,
  y = 100,
  width = 120,
  height = 90,
  text = "",
) {
  const id = `el-${state.nextId++}`;
  const element = {
    id,
    type,
    x,
    y,
    width,
    height,
    rotation: 0,
    zIndex: state.elements.length + 1,
    bgColor: "#ffffff",
    text,
  };
  state.elements.push(element);
  renderElement(element);
  updateLayers();
  saveToLocalStorage();
  return element;
}

function renderElement(el) {
  const div = document.createElement("div");
  div.id = el.id;
  div.className = "element";
  div.style.left = `${el.x}px`;
  div.style.top = `${el.y}px`;
  div.style.width = `${el.width}px`;
  div.style.height = `${el.height}px`;
  div.style.backgroundColor = el.bgColor;
  div.style.zIndex = el.zIndex;
  if (el.type === "text") {
    div.textContent = el.text;
    div.style.display = "flex";
    div.style.alignItems = "center";
    div.style.justifyContent = "center";
  }
  canvas.appendChild(div);
  addResizeHandles(div);
}

function addResizeHandles(div) {
  const handles = ["nw", "ne", "sw", "se"];
  handles.forEach((pos) => {
    const handle = document.createElement("div");
    handle.className = `resize-handle ${pos}`;
    handle.dataset.pos = pos;
    div.appendChild(handle);
  });
}

function selectElement(id) {
  // Deselect previous
  if (state.selectedId) {
    const prev = document.getElementById(state.selectedId);
    if (prev) prev.classList.remove("selected");
  }
  state.selectedId = id;
  if (id) {
    const el = document.getElementById(id);
    el.classList.add("selected");
    updateProperties();
  } else {
    properties.classList.add("hidden");
  }
}

function updateProperties() {
  const el = state.elements.find((e) => e.id === state.selectedId);
  if (!el) return;
  document.getElementById("prop-width").value = el.width;
  document.getElementById("prop-height").value = el.height;
  document.getElementById("prop-bg").value = el.bgColor;
  if (el.type === "text") {
    document.getElementById("text-label").classList.remove("hidden");
    document.getElementById("prop-text").value = el.text;
  } else {
    document.getElementById("text-label").classList.add("hidden");
  }
  properties.classList.remove("hidden");
}

function updateLayers() {
  layers.innerHTML = "";
  state.elements.forEach((el, index) => {
    const li = document.createElement("li");
    li.className =
      "flex justify-between items-center p-2 bg-gray-100 rounded mb-1";
    li.textContent = `${el.type} (${el.id})`;
    li.onclick = () => selectElement(el.id);
    const buttons = document.createElement("div");
    const upBtn = document.createElement("button");
    upBtn.textContent = "↑";
    upBtn.className = "px-2 py-1 bg-blue-500 text-white rounded mr-1";
    upBtn.onclick = (e) => {
      e.stopPropagation();
      moveLayerUp(index);
    };
    const downBtn = document.createElement("button");
    downBtn.textContent = "↓";
    downBtn.className = "px-2 py-1 bg-blue-500 text-white rounded";
    downBtn.onclick = (e) => {
      e.stopPropagation();
      moveLayerDown(index);
    };
    buttons.appendChild(upBtn);
    buttons.appendChild(downBtn);
    li.appendChild(buttons);
    layers.appendChild(li);
  });
}

function moveLayerUp(index) {
  if (index > 0) {
    [state.elements[index], state.elements[index - 1]] = [
      state.elements[index - 1],
      state.elements[index],
    ];
    updateZIndexes();
    renderElements();
    updateLayers();
    saveToLocalStorage();
    selectElement(state.selectedId); // Re-select to update handles
  }
}

function moveLayerDown(index) {
  if (index < state.elements.length - 1) {
    [state.elements[index], state.elements[index + 1]] = [
      state.elements[index + 1],
      state.elements[index],
    ];
    updateZIndexes();
    renderElements();
    updateLayers();
    saveToLocalStorage();
    selectElement(state.selectedId); // Re-select to update handles
  }
}

function updateZIndexes() {
  state.elements.forEach((el, index) => {
    el.zIndex = index + 1;
    document.getElementById(el.id).style.zIndex = el.zIndex;
  });
}

function saveToLocalStorage() {
  localStorage.setItem("figma-elements", JSON.stringify(state.elements));
}

// Event handlers
addRectBtn.onclick = () => createElement("rect");
addTextBtn.onclick = () =>
  createElement("text", 100, 100, 120, 30, "Sample Text");

// Property changes
document.getElementById("prop-width").oninput = (e) => {
  const el = state.elements.find((e) => e.id === state.selectedId);
  if (el) {
    el.width = parseInt(e.target.value);
    document.getElementById(state.selectedId).style.width = `${el.width}px`;
    saveToLocalStorage();
  }
};

document.getElementById("prop-height").oninput = (e) => {
  const el = state.elements.find((e) => e.id === state.selectedId);
  if (el) {
    el.height = parseInt(e.target.value);
    document.getElementById(state.selectedId).style.height = `${el.height}px`;
    saveToLocalStorage();
  }
};

document.getElementById("prop-bg").oninput = (e) => {
  const el = state.elements.find((e) => e.id === state.selectedId);
  if (el) {
    el.bgColor = e.target.value;
    document.getElementById(state.selectedId).style.backgroundColor =
      el.bgColor;
    saveToLocalStorage();
  }
};

document.getElementById("prop-text").oninput = (e) => {
  const el = state.elements.find((e) => e.id === state.selectedId);
  if (el && el.type === "text") {
    el.text = e.target.value;
    document.getElementById(state.selectedId).textContent = el.text;
    saveToLocalStorage();
  }
};

document.getElementById("layer-up").onclick = () => {
  if (state.selectedId) {
    const index = state.elements.findIndex((e) => e.id === state.selectedId);
    moveLayerUp(index);
  }
};

document.getElementById("layer-down").onclick = () => {
  if (state.selectedId) {
    const index = state.elements.findIndex((e) => e.id === state.selectedId);
    moveLayerDown(index);
  }
};

// Canvas click to deselect
canvas.onclick = (e) => {
  if (e.target === canvas) selectElement(null);
};

// Drag and resize logic (simplified)
canvas.onmousedown = (e) => {
  const target = e.target;
  if (target.classList.contains("element")) {
    selectElement(target.id);
    state.isDragging = true;
    const rect = target.getBoundingClientRect();
    state.dragOffset.x = e.clientX - rect.left;
    state.dragOffset.y = e.clientY - rect.top;
  } else if (target.classList.contains("resize-handle")) {
    state.isResizing = true;
    state.resizeHandle = target.dataset.pos;
    const el = state.elements.find((e) => e.id === state.selectedId);
    state.resizeStart.x = el.x;
    state.resizeStart.y = el.y;
    state.resizeStart.width = el.width;
    state.resizeStart.height = el.height;
  }
};

document.onmousemove = (e) => {
  if (state.isDragging && state.selectedId) {
    const el = state.elements.find((e) => e.id === state.selectedId);
    const canvasRect = canvas.getBoundingClientRect();
    el.x = Math.max(
      0,
      Math.min(
        e.clientX - canvasRect.left - state.dragOffset.x,
        canvasRect.width - el.width,
      ),
    );
    el.y = Math.max(
      0,
      Math.min(
        e.clientY - canvasRect.top - state.dragOffset.y,
        canvasRect.height - el.height,
      ),
    );
    document.getElementById(state.selectedId).style.left = `${el.x}px`;
    document.getElementById(state.selectedId).style.top = `${el.y}px`;
  } else if (state.isResizing && state.selectedId) {
    const el = state.elements.find((e) => e.id === state.selectedId);
    const canvasRect = canvas.getBoundingClientRect();
    const dx = e.clientX - canvasRect.left - el.x;
    const dy = e.clientY - canvasRect.top - el.y;
  } else if (state.isResizing && state.selectedId) {
    const el = state.elements.find((e) => e.id === state.selectedId);
    const canvasRect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - canvasRect.left;
    const mouseY = e.clientY - canvasRect.top;
    if (state.resizeHandle === "se") {
      el.width = Math.max(20, mouseX - state.resizeStart.x);
      el.height = Math.max(20, mouseY - state.resizeStart.y);
    } else if (state.resizeHandle === "sw") {
      el.width = Math.max(
        20,
        state.resizeStart.x + state.resizeStart.width - mouseX,
      );
      el.x = Math.max(0, mouseX);
      el.height = Math.max(20, mouseY - state.resizeStart.y);
    } else if (state.resizeHandle === "ne") {
      el.width = Math.max(20, mouseX - state.resizeStart.x);
      el.height = Math.max(
        20,
        state.resizeStart.y + state.resizeStart.height - mouseY,
      );
      el.y = Math.max(0, mouseY);
    } else if (state.resizeHandle === "nw") {
      el.width = Math.max(
        20,
        state.resizeStart.x + state.resizeStart.width - mouseX,
      );
      el.x = Math.max(0, mouseX);
      el.height = Math.max(
        20,
        state.resizeStart.y + state.resizeStart.height - mouseY,
      );
      el.y = Math.max(0, mouseY);
    }
    const elementDiv = document.getElementById(state.selectedId);
    elementDiv.style.left = `${el.x}px`;
    elementDiv.style.top = `${el.y}px`;
    elementDiv.style.width = `${el.width}px`;
    elementDiv.style.height = `${el.height}px`;
  }
  // Resize logic (implement based on handle position, constrain min size)
};

document.onmouseup = () => {
  state.isDragging = false;
  state.isResizing = false;
  saveToLocalStorage();
};

// Keyboard interactions
document.onkeydown = (e) => {
  if (!state.selectedId) return;
  const el = state.elements.find((e) => e.id === state.selectedId);
  if (e.key === "Delete") {
    state.elements = state.elements.filter((e) => e.id !== state.selectedId);
    document.getElementById(state.selectedId).remove();
    selectElement(null);
    updateLayers();
    saveToLocalStorage();
  } else if (e.key.startsWith("Arrow")) {
    const step = 5;
    if (e.key === "ArrowUp") el.y = Math.max(0, el.y - step);
    else if (e.key === "ArrowDown")
      el.y = Math.min(canvas.clientHeight - el.height, el.y + step);
    else if (e.key === "ArrowLeft") el.x = Math.max(0, el.x - step);
    else if (e.key === "ArrowRight")
      el.x = Math.min(canvas.clientWidth - el.width, el.x + step);
    document.getElementById(state.selectedId).style.left = `${el.x}px`;
    document.getElementById(state.selectedId).style.top = `${el.y}px`;
    saveToLocalStorage();
  }
};

// Export functions
exportJsonBtn.onclick = () => {
  const dataStr = JSON.stringify(state.elements, null, 2);
  const blob = new Blob([dataStr], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "design.json";
  a.click();
};

exportHtmlBtn.onclick = () => {
  let html =
    "<!DOCTYPE html><html><head><title>Exported Design</title></head><body>";
  state.elements.forEach((el) => {
    html += `<div style="position:absolute;left:${el.x}px;top:${el.y}px;width:${el.width}px;height:${el.height}px;background:${el.bgColor};z-index:${el.zIndex};">${el.type === "text" ? el.text : ""}</div>`;
  });
  html += "</body></html>";
  const blob = new Blob([html], { type: "text/html" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "design.html";
  a.click();
};

// Initialization
function loadFromLocalStorage() {
  const saved = localStorage.getItem("figma-elements");
  if (saved) {
    state.elements = JSON.parse(saved);
    state.nextId =
      Math.max(...state.elements.map((e) => parseInt(e.id.split("-")[1])), 0) +
      1;
    state.elements.forEach((el) => renderElement(el));
    updateLayers();
  }
}

loadFromLocalStorage();
