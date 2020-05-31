type Uzimaru = {
  age: number;
  version: string;
  generation: number;
};

export function getUzimaru(GitHubContributions: number): Uzimaru {
  let version = "v1";
  const quotient = Math.floor(GitHubContributions / 10);
  const mod10 = GitHubContributions % 10;
  if (mod10 == 0) {
    version = "v1";
  } else if (1 <= mod10 && mod10 <= 4) {
    version = "v2";
  } else if (5 <= mod10 && mod10 <= 9) {
    version = "v3";
  }
  const uzimaru: Uzimaru = {
    age: mod10,
    version: version,
    generation: quotient + 1
  };
  return uzimaru;
}
