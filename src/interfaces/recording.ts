export interface Recording {
  id: string;
  name: string;
  description: string;
  genre: string;
  artist: string;
  year: string;
  format: string;
  label: string;
  url: string;
}

export interface RecordingStore {
  id: string;
  data: {
    name: string;
    description: string;
    genre: string;
    artist: string;
    year: string;
    format: string;
    label: string;
    url: string;
  };
}

export interface Response {
  message: string;
}

export interface RecordingCreateRequest {
  input: {
    name: string;
    description: string;
    genre: string;
    artist: string;
    year: string;
    format: string;
    label: string;
    url: string;
  };
}

export interface RecordingGetRequest {
  input: {
    recordingId: string;
  };
}
