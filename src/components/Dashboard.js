import React, { Component } from 'react';
import Nav from './Nav';

class Dashboard extends Component {
  constructor() {
    super()

    this.state = {
      posts: [],
      search: "",
      userposts: true
    }
  }

  getAllPosts() {

  }

  handleSearchReset() {

  }

  render() {
    return (
      <div className="logged-in">
        <Nav />
        <div>
          <div className="post-search">
            <form action="">
              <label htmlFor="search"></label>
              <input type="text" name="search" />
              <button>Search</button>
              <button>Reset</button>
              <label htmlFor="myposts">My Posts</label>
              <input type="checkbox" name="myposts" />
            </form>
          </div>

          <div className="post-list">
            <h2>All posts</h2>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard