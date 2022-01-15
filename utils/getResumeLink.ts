import fs from "fs";
import path from "path";

const resumeDirectory = path.join(process.cwd(), "public", "resume");

export default function getResumeLink(): string {
  try {
    const fileNames = fs.readdirSync(resumeDirectory);
    const resumeFileName = fileNames[0];
    return resumeFileName;
  } catch (err) {}
}
