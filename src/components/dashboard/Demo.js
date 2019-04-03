<div>
  <h1 style={{ fontFamily: "Cereal-med" }}> Take Quizzes </h1>
  <br />
  {quiz.subQuiz.map((subQuiz, index) => {
    return (
      <div className="main-card-container">
        <ul className="quiz-cards" style={{ justifyContent: "center" }}>
          <li className="cards-item">
            <div className="course-card">
              <div class="card-header">
                <h1 class="course-title">
                  Capitalize on low hanging fruit to identify a ballpark value.
                </h1>
              </div>

              <div class="card-body">
                <p class="course-description">
                  Leverage agile frameworks to provide a robust synopsis for
                  high level overviews. Iterative approaches to corporate
                  strategy foster collaborative thinking to further the overall
                  value proposition.
                </p>

                <div class="course-author">
                  <img
                    class="author-photo"
                    src="https://projects.invisionapp.com/assets/10858009/29732048/CF95CC4B4FE092404D508C32E6985007BEBDA9142DD4D51A3732BB63A2BDA1D4/preview?w=758"
                    alt="Picture"
                  />
                  <p class="author-name">Kaylee Warren</p>
                </div>

                <div class="course-attributes">
                  <div class="course-duration">
                    <img
                      class="icon-time"
                      src="https://rawgit.com/nelsonreitz/349a70325c2c14dc5e66581b73d6287f/raw/a92ae40c5d28a3231dfe36376184007694d51c37/icon-time.svg"
                    />
                    <p class="text">about 4 hours</p>
                  </div>
                  <div class="course-likes">
                    <img
                      class="icon-heart"
                      src="https://rawgit.com/nelsonreitz/349a70325c2c14dc5e66581b73d6287f/raw/a92ae40c5d28a3231dfe36376184007694d51c37/icon-heart.svg"
                    />
                    <p class="text">287</p>
                  </div>
                </div>
              </div>

              <a class="card-footer" href="#">
                <img
                  class="icon-play"
                  src="https://rawgit.com/nelsonreitz/349a70325c2c14dc5e66581b73d6287f/raw/a92ae40c5d28a3231dfe36376184007694d51c37/icon-play.svg"
                />
                <p class="text">Start</p>
              </a>
            </div>
          </li>

          <li className="cards-item">
            <div className="course-card">
              <div class="card-header">
                <h1 class="course-title">
                  Capitalize on low hanging fruit to identify a ballpark value.
                </h1>
              </div>

              <div class="card-body">
                <p class="course-description">
                  Leverage agile frameworks to provide a robust synopsis for
                  high level overviews. Iterative approaches to corporate
                  strategy foster collaborative thinking to further the overall
                  value proposition.
                </p>

                <div class="course-author">
                  <img
                    class="author-photo"
                    src="https://projects.invisionapp.com/assets/10858009/29732048/CF95CC4B4FE092404D508C32E6985007BEBDA9142DD4D51A3732BB63A2BDA1D4/preview?w=758"
                    alt="Picture"
                  />
                  <p class="author-name">Kaylee Warren</p>
                </div>

                <div class="course-attributes">
                  <div class="course-duration">
                    <img
                      class="icon-time"
                      src="https://rawgit.com/nelsonreitz/349a70325c2c14dc5e66581b73d6287f/raw/a92ae40c5d28a3231dfe36376184007694d51c37/icon-time.svg"
                    />
                    <p class="text">about 4 hours</p>
                  </div>
                  <div class="course-likes">
                    <img
                      class="icon-heart"
                      src="https://rawgit.com/nelsonreitz/349a70325c2c14dc5e66581b73d6287f/raw/a92ae40c5d28a3231dfe36376184007694d51c37/icon-heart.svg"
                    />
                    <p class="text">287</p>
                  </div>
                </div>
              </div>

              <a class="card-footer" href="#">
                <img
                  class="icon-play"
                  src="https://rawgit.com/nelsonreitz/349a70325c2c14dc5e66581b73d6287f/raw/a92ae40c5d28a3231dfe36376184007694d51c37/icon-play.svg"
                />
                <p class="text">Start</p>
              </a>
            </div>
          </li>
        </ul>
      </div>
    );
  })}
</div>;
