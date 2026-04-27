import { render, screen } from "@testing-library/vue";
import TaskManager from "../UI/TaskManager.vue";

afterEach(() => {
  vi.restoreAllMocks();
});

// cargar → agregar task → ver en lista
// cargar vacío → agregar → ver lista

describe("Testing the TaskManager UI", () => {});
