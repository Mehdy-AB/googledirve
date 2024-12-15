export function formatBitSize(bits: number): string {
    if (bits <= 0) {
      return "0 Bytes";
    }
  
    const units = ["Bits", "KB", "MB", "GB", "TB", "PB"];
    const bitThresholds = [1, 1024, 1024 ** 2, 1024 ** 3, 1024 ** 4, 1024 ** 5]; // Conversion factors
  
    // Find the appropriate unit to display
    for (let i = bitThresholds.length - 1; i >= 0; i--) {
      const threshold = bitThresholds[i];
      if (bits >= threshold * 0.5) {
        const value = bits / threshold;
  
        // Determine the next smaller unit if value is < 1
        if (value < 1 && i > 0) {
          const smallerThreshold = bitThresholds[i - 1];
          const smallerValue = bits / smallerThreshold;
          return `${smallerValue.toFixed(2)} ${units[i - 1]}`;
        }
  
        return `${value.toFixed(2)} ${units[i]}`;
      }
    }
  
    return `${bits} Bits`; // Default fallback
  }