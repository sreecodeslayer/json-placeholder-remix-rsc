const base = "https://jsonplaceholder.typicode.com";

export interface PostType {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export interface PostCommentType {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
}

export interface UserType {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export const getPosts = async () => {
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  const res = await fetch(`${base}/posts`, {
    method: "GET",
    headers,
  });

  if (!res.ok) {
    throw new Error("Failed to fetch");
  }

  return res.json();
};

export const getPost = async (postId: string) => {
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  const res = await fetch(`${base}/posts/${postId}`, {
    method: "GET",
    headers,
  });

  if (!res.ok) {
    throw new Error("Failed to fetch");
  }

  return res.json();
};

export const getPostComments = async (postId: number) => {
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  const res = await fetch(`${base}/comments?postId=${postId}`, {
    method: "GET",
    headers,
  });

  if (!res.ok) {
    throw new Error("Failed to fetch");
  }

  return res.json();
};

export const getUser = async (userId: number) => {
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  const res = await fetch(`${base}/users/${userId}`, {
    method: "GET",
    headers,
  });

  if (!res.ok) {
    throw new Error("Failed to fetch");
  }

  return res.json();
};
