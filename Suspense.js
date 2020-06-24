https://rahmanfadhil.com/fetch-data-with-react-suspense/


import React, { Suspense } from "react"


import PostList from "./PostList"
import createResource from "./resource"

const resource = createResource()

export default function App() {
  return (
    <div>
      <h1>Blog Posts</h1>
      <Suspense fallback={<h1>Loading...</h1>}>
        <PostList resource={resource} />
      </Suspense>
    </div>
  )
}





export default function createResource() {
    let status = "loading"
    let result
    let suspender = fetchPosts().then(
      data => {
        status = "success"
        result = data
      },
      error => {
        status = "error"
        result = error
      }
    )
  
    return {
      read() {
        if (status === "loading") {
          throw suspender
        } else if (status === "error") {
          throw result
        } else if (status === "success") {
          return result
        }
      }
    }
  }














  import React from "react"

export default function PostList({ resource }) {
  const posts = resource.read()

  return (
    <ul>
      {posts.map((post, i) => (
        <li key={i}>{post.title}</li>
      ))}
    </ul>
  )
}