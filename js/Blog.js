import { BlogAPI } from './BlogAPI.js'

export class Blog {
  constructor(root) {
    this.root = document.querySelector(root)
    this.getPosts()
  }

  async getPosts() {
    const posts = await BlogAPI.blogPosts()

    this.posts = posts

    this.showPosts()
  }

  async showPosts() {
    for (let i = 0; i < this.posts.length; i++) {
      const post = this.createPost()
      const postId = i + 1
      const comments = await BlogAPI.getComments(postId)
      const users = await BlogAPI.getUser(this.posts[i].userId)

      this.users = users
      this.comments = comments

      post.querySelector('.username').textContent = this.users.name
      post.querySelector('h2').textContent = this.posts[i].title
      post.querySelector('.content').textContent = this.posts[i].body

      post.querySelector('.comment1').textContent = this.comments[0].body
      post.querySelector('.comment2').textContent = this.comments[1].body
      post.querySelector('.comment3').textContent = this.comments[2].body
      post.querySelector('.comment4').textContent = this.comments[3].body
      post.querySelector('.comment5').textContent = this.comments[4].body

      post.querySelector('button').onclick = () => {
        post.querySelector('.comments').classList.toggle('collapse')
      }

      this.root.append(post)
    }
  }

  createPost() {
    const div = document.createElement('div')

    div.innerHTML = `
    <div class="user">
      <img src="./assets/user.svg" alt="Ícone de usuário"/>
      <p class="username">name</p>
    </div>
    <h2>title</h2>
    <p class="content">body</p>
    <button>Comentários</button>
    <div class="comments collapse">
      <p class="comment1" >comment</p>
      <p class="comment2" >comment</p>
      <p class="comment3" >comment</p>
      <p class="comment4" >comment</p>
      <p class="comment5" >comment</p>
    </div>
    `

    div.classList.add('post')

    return div
  }
}
