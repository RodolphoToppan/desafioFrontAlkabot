export class BlogAPI {
  static blogPosts() {
    const endpoint = `https://jsonplaceholder.typicode.com/posts`

    return fetch(endpoint)
      .then(data => data.json())
      .then(posts => posts)
  }

  static getComments(postId) {
    const endpoint = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`

    return fetch(endpoint)
      .then(data => data.json())
      .then(comments => comments)
  }

  static getUser(user) {
    const endpoint = `https://jsonplaceholder.typicode.com/users/${user}`

    return fetch(endpoint)
      .then(data => data.json())
      .then(user => user)
  }
}
