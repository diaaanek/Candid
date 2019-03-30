{
  /* QUESTION FEEED  */
}
<div class="message-container">
  <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiBqkNgqpXwxINSvtSflLYfSSQylL3PAA8fUymskbcPOb9sG3k"
    class="avatar"
  />
  <div class="message-text">
    <h3 style={{ textAlign: "left" }}>
      carl carlson <span>10:30 AM</span>
    </h3>
    <p>
      Nemo temporibus autem officia quae ullam pariatur blanditiis
      velit eveniet, alias at fuga maxime.{" "}
    </p>{" "}
  </div>
</div>








<div class="question">
  <div class="votes">
    <div class="upvote" />
    <div class="number-of-votes">5</div>
    <div class="downvote" />
  </div>
  <div class="question-and-answer">
    <ul>
      {this.state.loading ? <div>loading...</div> : null}
      {this.state.user && this.state.items ? (
        Object.keys(items).map(item => {
          const requests = items[item].requests;
          return (
            <li key={items[item].key}>
              <h4
                style={{
                  fontFamily: "Cereal-bold",
                  color: "grey",
                  fontSize: "18px"
                }}
              >
                {items[item].question}
              </h4>
              <p> Answered by: </p>

              {requests &&
                Object.keys(requests).map(el => {
                  return (
                    <div>
                      <h5>{requests[el].name}</h5>
                    </div>
                  );
                })}

              <p>answered by: {items[item].user}</p>
              {this.state.userId === items[item].createdById ? (
                <div>
                  <button
                    onClick={() =>
                      this.removeItem(items[item].key, this.state.userId)
                    }
                  >
                    <img
                      src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-close-512.png"
                      style={{ height: "25px", width: "25px" }}
                    />
                  </button>
                  <button onClick={() => this.updForm(items[item].key)}>
                    <img
                      src="http://simpleicon.com/wp-content/uploads/pencil.png"
                      style={{ height: "25px", width: "25px" }}
                    />
                  </button>
                </div>
              ) : null}

              {this.state.updId === items[item].key ? (
                <div>
                  <form
                    onSubmit={() =>
                      this.updItem(items[item].key, this.state.userId)
                    }
                  >
                    <input
                      type="text"
                      name="updName"
                      placeholder="What's your name?"
                      onChange={this.handleChange}
                      value={this.state.updName}
                    />
                    <input
                      type="text"
                      name="updItem"
                      placeholder="What is your interview question?"
                      onChange={this.handleChange}
                      value={this.state.updItem}
                    />
                    <button disabled={updItem && updName !== "" ? false : true}>
                      upd
                    </button>
                  </form>
                </div>
              ) : null}
            </li>
          );
        })
      ) : (
        <p>nothing to show</p>
      )}
    </ul>
  </div>
</div>;

<div class="ques-wrapper">
  <div id="question">
    <div class="search-area" />
    <h1 style={{ fontFamily: "Cereal-bold", color: "grey" }}>
      Have a question?
    </h1>

    <div class="input-wrapper">
      {this.state.user ? (
        <section className="add-item">
          <form onSubmit={this.handleSubmit}>
            <input
              name="currentItem"
              placeholder="Have a question?"
              onChange={this.handleChange}
              value={this.state.currentItem}
            />{" "}
            <button
              style={{ display: "inlineBlock", position: "relative" }}
              disabled={currentItem && username !== "" ? false : true}
            >
              Post
            </button>
          </form>
        </section>
      ) : null}
    </div>

    <section />
  </div>
</div>;
