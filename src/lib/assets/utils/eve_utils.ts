// eve_utils.js - Helper functions for events
export const fetchEventsAndImages = async (supabase) => {
  try {
    // Fetch existing events from the 'events' table
    const { data: existingEvents, error: eventsError } = await supabase
      .from('events')
      .select('*');

    if (eventsError) {
      console.error('Failed to fetch events:', eventsError.message);
      return { existingEvents: [], folders: [], images: [], error: 'Failed to fetch events' };
    }

    // 🌞 \\

    // Fetch event flyers from the 'Gallery' storage bucket
    const { data: imagesData, error: imagesError } = await supabase
      .storage
      .from('Gallery')
      .list('event_Flyer');

    if (imagesError) {
      console.error('Failed to fetch event flyers:', imagesError.message);
      return { existingEvents: [], folders: [], images: [], error: 'Failed to fetch event flyers' };
    }

    // Map the fetched images to an array of objects with id and url
    const images = imagesData.map((file, index) => ({
      id: index,
      url: `https://vyzeudiywhlxdzpnfehs.supabase.co/storage/v1/object/public/Gallery/event_Flyer/${file.name}`,
    }));

    // 🌞 \\

    // Fetch bout photo folders from the 'Gallery' storage bucket
    const { data: folderData, error: folderError } = await supabase.storage
      .from('Gallery')
      .list('bout_photos');

    if (folderError) {
      console.error('Error fetching folders:', folderError.message);
      return { existingEvents: [], folders: [], images: [], error: 'Error fetching folders' };
    }

    // 🌞 \\

    // Fetch images for each folder and map them to an array of objects with folder name and images
    const folders = await Promise.all(
      folderData.map(async (folder, index) => {
        const { data: files, error: filesError } = await supabase
          .storage
          .from('Gallery')
          .list(`bout_photos/${folder.name}`);

        if (filesError) {
          console.error(`Error fetching images for folder ${folder.name}:`, filesError.message);
          return { name: folder.name, images: [] };
        }

        const images = files.map(file => generatePublicUrl(`bout_photos/${folder.name}`, file.name));
        return { name: folder.name, images };
      })
    );

    // Return the fetched events, folders, and images
    return { existingEvents, folders, images, error: null };
  } catch (err) {
    console.error('Error loading data:', err.message);
    return { existingEvents: [], folders: [], images: [], error: 'Error loading data' };
  }
};

//➖ ➖ ➖ ➖ ➖ 🦖➖ ➖ ➖ 🌟  🌟  🌟

// Function to fetch the top image URL from a specified folder in Supabase storage
export const fetchTopImageUrl = async (supabase, folderName) => {
  try {
    // Sanitize folder name to prevent directory traversal attacks
    const sanitizedFolderName = folderName.replace(/[^a-zA-Z0-9-_]/g, '');

    // Fetch the first file from the specified folder
    const { data: files, error: fileError } = await supabase
      .storage
      .from('Gallery')
      .list(`bout_photos/${sanitizedFolderName}`, { limit: 1 });

    if (fileError) {
      console.error(`Error fetching files for folder ${sanitizedFolderName}:`, fileError.message);
      return null;
    }

    if (files && files.length > 0) {
      // Generate a public URL for the first file in the folder
      const { data, error: urlError } = supabase
        .storage
        .from('Gallery')
        .getPublicUrl(`bout_photos/${sanitizedFolderName}/${files[0].name}`);

      if (urlError) {
        console.error(`Error generating public URL for ${sanitizedFolderName}:`, urlError.message);
        return null;
      }

      return data.publicUrl;
    }

    return null;
  } catch (err) {
    console.error('Error fetching top image URL:', err.message);
    return null;
  }
};

//➖ ➖ ➖ ➖ ➖ 🦖➖ ➖ ➖ 🌟  🌟  🌟

// Function to fetch images with pagination from a specified folder in Supabase storage
export const fetchImagesWithPagination = async (supabase, folderName, page, limit) => {
  try {
    // Sanitize folder name to prevent directory traversal attacks
    const sanitizedFolderName = folderName.replace(/[^a-zA-Z0-9-_]/g, '');

    // Fetch files from the specified folder with pagination
    const { data: files, error: filesError } = await supabase
      .storage
      .from('Gallery')
      .list(`bout_photos/${sanitizedFolderName}`, { limit, offset: page * limit });

    if (filesError) {
      console.error(`Error fetching images for folder ${sanitizedFolderName}:`, filesError.message);
      return [];
    }

    // Map the fetched files to an array of public URLs
    return files.map(file => generatePublicUrl(`bout_photos/${sanitizedFolderName}`, file.name));
  } catch (err) {
    console.error('Error fetching images with pagination:', err.message);
    return [];
  }
};

//➖ ➖ ➖ ➖ ➖ 🦖➖ ➖ ➖ 🌟  🌟  🌟

// Function to upload a flyer image to Supabase storage
export const uploadFlyerImage = async (supabase, sanitizedName, image) => {
  // Sanitize file path to prevent directory traversal attacks
  const sanitizedFilePath = `event_Flyer/${sanitizedName.replace(/[^a-zA-Z0-9-_]/g, '')}`;
  const { error } = await supabase.storage
    .from('Gallery')
    .upload(sanitizedFilePath, image);

  if (error) {
    console.error(`Error uploading flyer image: ${error.message}`);
    return { success: false, error: error.message };
  }

  return { success: true, filePath: sanitizedFilePath };
};

//➖ ➖ ➖ ➖ ➖ 🦖➖ ➖ ➖ 🌟  🌟  🌟

// Function to upload a gallery image to Supabase storage
export const uploadGalleryImage = async (supabase, folderName, sanitizedName, image) => {
  // Sanitize file path to prevent directory traversal attacks
  const sanitizedFolderName = folderName.replace(/[^a-zA-Z0-9-_]/g, '');
  const sanitizedFileName = sanitizedName.replace(/[^a-zA-Z0-9-_]/g, '');
  const filePath = `bout_photos/${sanitizedFolderName}/${sanitizedFileName}`;
  const { error } = await supabase.storage
    .from('Gallery')
    .upload(filePath, image);

  if (error) {
    console.error(`Error uploading gallery image: ${error.message}`);
    return { success: false, error: error.message };
  }

  return { success: true, filePath };
};


//➖ ➖ ➖ ➖ ➖ 🦖➖ ➖ ➖ 🌟  🌟  🌟
// Function to delete an existing flyer image from Supabase storage
export const deleteExistingFlyerImage = async (supabase, sanitizedName) => {
  // Sanitize file path to prevent directory traversal attacks
  const sanitizedFilePath = sanitizedName.replace(/[^a-zA-Z0-9-_]/g, '');
  const { data: existingImage, error: fetchError } = await supabase.storage
    .from('Gallery')
    .list('event_Flyer', { search: sanitizedFilePath });

  if (fetchError) {
    console.error('Error fetching existing image:', fetchError.message);
    return { success: false, error: 'Error fetching existing image' };
  }

  if (existingImage && existingImage.length > 0) {
    const { error: deleteError } = await supabase.storage
      .from('Gallery')
      .remove([`event_Flyer/${existingImage[0].name}`]);

    if (deleteError) {
      console.error('Error deleting existing flyer image:', deleteError.message);
      return { success: false, error: 'Error deleting existing flyer image' };
    }
  }

  return { success: true };
};

// Function to delete an existing gallery image from Supabase storage
export const deleteExistingGalleryImage = async (supabase, folderName, imageName) => {
  // Sanitize file path to prevent directory traversal attacks
  const sanitizedFolderName = folderName.replace(/[^a-zA-Z0-9-_]/g, '');
  const sanitizedImageName = imageName.replace(/[^a-zA-Z0-9-_]/g, '');
  const { error: deleteError } = await supabase.storage
    .from('Gallery')
    .remove([`bout_photos/${sanitizedFolderName}/${sanitizedImageName}`]);

  if (deleteError) {
    console.error('Error deleting existing gallery image:', deleteError.message);
    return { success: false, error: 'Error deleting existing gallery image' };
  }

  return { success: true };
};


	//➖ ➖ ➖ ➖ ➖ 🦖➖ ➖ ➖ 🌟  🌟  🌟

// Function to sanitize event names by converting to lowercase, removing special characters, and replacing spaces
export const sanitizeEventName = (eventName) => {
  return eventName
    .toLowerCase()
    .replace(/[^a-z0-9-_ ]/gi, '')
    .replace(/\s+/g, ' ');
};


//➖ ➖ ➖ ➖ ➖ 🦖➖ ➖ ➖ 🌟  🌟  🌟

// Function to find a matching image for a given event name from a list of images
export const findMatchingImage = (eventName, images) => {
  if (!eventName) {
    console.error('No event name provided to find the matching image');
    return null;
  }

  const sanitizedEventName = sanitizeEventName(eventName);

  return images.find((image) => {
    const imageName = decodeURIComponent(image.url.split('/').pop())
      .replace(/\.[^/.]+$/, '')
      .trim()
      .toLowerCase();

    return imageName === sanitizedEventName.toLowerCase();
  });
};

// Function to check if there is a matching image for a given event name from a list of images
export const hasMatchingImage = (eventName, images) => {
  const sanitizedEventName = sanitizeEventName(eventName);

  const matchingImage = images.find((image) => {
    const imageName = image.url
      .split('/')
      .pop()
      .replace(/\.[^/.]+$/, '');

    return imageName.toLowerCase() === sanitizedEventName.toLowerCase();
  });

  return matchingImage ? `${matchingImage.url}?t=${new Date().getTime()}` : null;
};

// Function to find a matching event for a given gallery name from a list of events
export const findMatchingEvent = (events, galleryName) => {
  const sanitizedGalleryName = sanitizeEventName(galleryName);
  return events.find((event) => sanitizeEventName(event.event_name) === sanitizedGalleryName);
};

//➖ ➖ ➖ ➖ ➖ 🦖➖ ➖ ➖ 🌟  🌟  🌟

// Function to generate a public URL for a file in a specified folder
export const generatePublicUrl = (folder, filename) => {
  return `https://vyzeudiywhlxdzpnfehs.supabase.co/storage/v1/object/public/Gallery/${folder}/${filename}`;
};
