import { describe, expect, it } from "vitest";
import { projects, TRAILER_FULL_URL, youtubeId } from "./projects";

const titles = () => projects.map(({ title }) => title);
const ids = () => projects.map(({ id }) => id);

describe("project configuration", () => {
  it("keeps the requested seven projects in the gallery order", () => {
    expect(titles()).toEqual(["THE SILENCE GUARDS", "Drugstore", "Wes", "Nico y el monstruo del tejado", "Avatar 01", "Barcino Nº 29", "Moda y arquitectura"]);
  });
  it("puts Drugstore in the second slot and Nico in the fourth", () => {
    expect(ids().slice(1, 4)).toEqual(["drugstore", "wes", "nico"]);
  });
  it("uses vertical format only for Silence Guards and Avatar", () => {
    expect(projects.filter(({ format }) => format === "vertical").map(({ id }) => id)).toEqual(["silence-guards", "avatar-01"]);
  });
  it("has playable links only for Silence Guards and Drugstore", () => {
    expect(projects.filter(({ videoUrl }) => videoUrl !== "").map(({ id }) => id)).toEqual(["silence-guards", "drugstore"]);
  });
  it("gives both playable projects a poster image", () => {
    for (const id of ["silence-guards", "drugstore"]) {
      const project = projects.find((p) => p.id === id);
      expect(project?.poster).toBeTruthy();
    }
  });
  it("leaves the full trailer link empty", () => { expect(TRAILER_FULL_URL).toBe(""); });
  it("supports YouTube watch, short and share links", () => {
    for (const url of ["https://www.youtube.com/watch?v=abcdefghijk", "https://youtu.be/abcdefghijk", "https://youtube.com/shorts/abcdefghijk"]) expect(youtubeId(url)).toBe("abcdefghijk");
  });
  it("does not enable playback for an empty or non-YouTube link", () => { expect(youtubeId("")).toBe(""); expect(youtubeId("https://example.com/watch?v=abcdefghijk")).toBe(""); });
});
