function calculateExperience(startDate) {
  const start = new Date(startDate);
  const now = new Date();

  let years = now.getFullYear() - start.getFullYear();
  let months = now.getMonth() - start.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  const yearText = "y";
  const monthText = "m";

  return `${years}${yearText} ${months}${monthText}`;
}

export default calculateExperience;