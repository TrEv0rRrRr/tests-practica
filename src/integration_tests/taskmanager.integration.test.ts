import { render, screen } from "@testing-library/vue";
import TaskManager from "../UI/TaskManager.vue";

afterEach(() => {
  vi.restoreAllMocks();
});

describe("Testing the TaskManager UI", () => {
  test("Should render the tasks from the API", async () => {
    // Arrange
    vi.spyOn(global, "fetch").mockResolvedValue({
      json: async () => ["Task 1", "Task 2"],
    } as any);

    // Act
    render(TaskManager);

    // Assert
    expect(await screen.findByText("Task 1")).toBeInTheDocument();
    expect(await screen.findByText("Task 2")).toBeInTheDocument();
  });

  test("Should render the error message if there is an error", async () => {
    vi.spyOn(global, "fetch").mockRejectedValue;

    // Act
    render(TaskManager);

    // Assert
    expect(await screen.findByText("Error loading tasks")).toBeInTheDocument();
  });
});
