import { describe, expect, it } from "vitest";
import { projects, TRAILER_FULL_URL, youtubeId } from "./projects";
describe("project configuration", () => {
  it("keeps the requested seven projects in order", () => {
    expect(projects.map(({ title }) => title)).toEqual(["THE SILENCE GUARDS", "Nico y el monstruo del tejado", "Wes", "Drugstore", "Avatar 01", "Barcino Nº 29", "Moda y arquitectura"]);
  });
  it("uses vertical format only for Silence Guards and Avatar", () => { expect(projects.filter(({ format }) => format === "vertical").map(({ id }) => id)).toEqual(["silence-guards", "avatar-01"]); });
  it("leaves all project and full trailer links empty", () => { expect(projects.map(({ videoUrl }) => videoUrl)).toEqual(["", "", "", "", "", "", ""]); expect(TRAILER_FULL_URL).toBe(""); });
  it("supports YouTube watch, short and share links", () => {
    for (const url of ["https://www.youtube.com/watch?v=abcdefghijk", "https://youtu.be/abcdefghijk", "https://youtube.com/shorts/abcdefghijk"]) expect(youtubeId(url)).toBe("abcdefghijk");
  });
  it("does not enable playback for an empty or non-YouTube link", () => { expect(youtubeId("")).toBe(""); expect(youtubeId("https://example.com/watch?v=abcdefghijk")).toBe(""); });
});