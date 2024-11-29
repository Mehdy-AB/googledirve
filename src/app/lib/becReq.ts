export const fetchFolders = async () => {
    try {
      const response = await fetch('/api/folders');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching folders:', error);
      return null;
    }
  };