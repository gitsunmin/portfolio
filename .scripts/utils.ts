import { promises as fs } from 'fs';
import * as path from 'path';

export async function copyFiles(sourcePath: string, targetPath: string) {
  try {
    const stats = await fs.stat(sourcePath);
    if (stats.isDirectory()) {
      // 대상 경로에 폴더가 없으면 생성합니다.
      await fs.mkdir(targetPath, { recursive: true });
      // 폴더 내의 항목들을 가져와 각각에 대해 copyItem을 재귀적으로 호출합니다.
      const items = await fs.readdir(sourcePath);
      for (const item of items) {
        const sourceItemPath = path.join(sourcePath, item);
        const targetItemPath = path.join(targetPath, item);
        await copyFiles(sourceItemPath, targetItemPath);
      }
    } else if (stats.isFile()) {
      // 파일을 대상 경로로 복사합니다.
      await fs.copyFile(sourcePath, targetPath);
    }
  } catch (error) {
    console.error(`Error copying ${sourcePath} to ${targetPath}:`, error);
  }
}
