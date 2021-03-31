
const {describe} = require('mocha');
const index = require('../index');
const chai = require('chai');
const chaiHttp = require('chai-http');

const { expect } = chai;

chai.use(chaiHttp);

describe("Movies", () => {
    it("adds 1st movie successfully", done => {
        chai
          .request(index)
          .post("/api/movies")
          .send({
            "title": "Don",
            "year": 2006,
            "genres": [
                "Action",
                "Comedy"
            ]
        })
          .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res.body).to.deep.equals({
              "title": "Don",
              "year": 2006,
              "genres": [
                  "Action",
                  "Comedy"
              ],
              "reviews": []
          });
            done();
          });
      });

      it("adds 2nd movie successfully", done => {
        chai
          .request(index)
          .post("/api/movies")
          .send({
            "title": "Tiger",
            "year": 2008,
            "genres": "Drama"
        })
          .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res.body).to.deep.equals({
              "title": "Tiger",
              "year": 2008,
              "genres": "Drama",
              "reviews": []
          });
            done();
          });
      });

      it("adds 3rd movie successfully", done => {
        chai
          .request(index)
          .post("/api/movies")
          .send({
            "title": "Padmaavat",
            "year": 2006,
            "genres": "Comedy"
        })
          .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res.body).to.deep.equals({
              "title": "Padmaavat",
              "year": 2006,
              "genres": "Comedy",
              "reviews": []
          });
            done();
          });
      });

      it("adds 4th movie successfully", done => {
        chai
          .request(index)
          .post("/api/movies")
          .send({
            "title": "Lunchbox",
            "year": 2021,
            "genres": "Drama"
        })
          .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res.body).to.deep.equals({
              "title": "Lunchbox",
              "year": 2021,
              "genres": "Drama",
              "reviews": []
          });
            done();
          });
      });

      it("adds 5th movie successfully", done => {
        chai
          .request(index)
          .post("/api/movies")
          .send({
            "title": "Guru",
            "year": 2006,
            "genres": "Drama"
        })
          .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res.body).to.deep.equals({
              "title": "Guru",
              "year": 2006,
              "genres": "Drama",
              "reviews": []
          });
            done();
          });
      });

      it("adds 6th movie successfully", done => {
        chai
          .request(index)
          .post("/api/movies")
          .send({
            "title": "Metro",
            "year": 2006,
            "genres": "Romance"
        })
          .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res.body).to.deep.equals({
              "title": "Metro",
              "year": 2006,
              "genres": "Romance",
              "reviews": []
          });
            done();
          });
      });
    });

    describe("Users", () => {
      it("adds 1st user successfully", done => {
        chai
          .request(index)
          .post('/api/users')
          .send({
            "name": "SRK"
        })
          .end((err,res) => {
            expect(res).to.have.status(200)
            expect(res.body).to.deep.equals({
              "name": "SRK",
              "status": "Viewer",
              "movies_reviewed": 0
          });
            done();
          });
      });

      it("adds 2nd user successfully", done => {
        chai
          .request(index)
          .post('/api/users')
          .send({
            "name": "Salman"
        })
          .end((err,res) => {
            expect(res).to.have.status(200)
            expect(res.body).to.deep.equals({
              "name": "Salman",
              "status": "Viewer",
              "movies_reviewed": 0
          });
            done();
          });
      });

      it("adds 3rd user successfully", done => {
        chai
          .request(index)
          .post('/api/users')
          .send({
            "name": "Deepika"
        })
          .end((err,res) => {
            expect(res).to.have.status(200)
            expect(res.body).to.deep.equals({
              "name": "Deepika",
              "status": "Viewer",
              "movies_reviewed": 0
          });
            done();
          });
      });
    });

    describe("Reviews", () => {
      it("adds 1st review successfully", (done) => {
        chai
          .request(index)
          .post('/api/reviews')
          .send({
            "name": "SRK",
            "title": "Don",
            "rating": 2
        })
          .end((err,res) => {
            expect(res).to.have.status(200)
            expect(res.body).to.deep.equals({
              "name": "SRK",
              "rating": 2,
              "category": "Viewer"
          });
            done();
          });
      });

      it("adds 2nd review successfully", (done) => {
        chai
          .request(index)
          .post('/api/reviews')
          .send({
            "name": "SRK",
            "title": "Padmaavat",
            "rating": 8
        })
          .end((err,res) => {
            expect(res).to.have.status(200)
            expect(res.body).to.deep.equals({
              "name": "SRK",
              "rating": 8,
              "category": "Viewer"
          });
            done();
          });
      });

      it("adds 3rd review successfully", (done) => {
        chai
          .request(index)
          .post('/api/reviews')
          .send({
            "name": "Salman",
            "title": "Don",
            "rating": 5
        })
          .end((err,res) => {
            expect(res).to.have.status(200)
            expect(res.body).to.deep.equals({
              "name": "Salman",
              "rating": 5,
              "category": "Viewer"
          });
            done();
          });
      });

      it("adds 4th review successfully", (done) => {
        chai
          .request(index)
          .post('/api/reviews')
          .send({
            "name": "Deepika",
            "title": "Don",
            "rating": 9
        })
          .end((err,res) => {
            expect(res).to.have.status(200)
            expect(res.body).to.deep.equals({
              "name": "Deepika",
              "rating": 9,
              "category": "Viewer"
          });
            done();
          });
      });

      it("adds 5th review successfully", (done) => {
        chai
          .request(index)
          .post('/api/reviews')
          .send({
            "name": "Deepika",
            "title": "Guru",
            "rating": 6
        })
          .end((err,res) => {
            expect(res).to.have.status(200)
            expect(res.body).to.deep.equals({
              "name": "Deepika",
              "rating": 6,
              "category": "Viewer"
          });
            done();
          });
      });

      it("fails to add duplicate review", (done) => {
        chai
          .request(index)
          .post('/api/reviews')
          .send({
            "name": "SRK",
            "title": "Don",
            "rating": 10
        })
          .end((err,res) => {
            expect(res).to.have.status(400)
            done();
          });
      });

      it("fails to add review for unreleased movie", (done) => {
        chai
          .request(index)
          .post('/api/reviews')
          .send({
            "name": "Deepika",
            "title": "Lunchbox",
            "rating": 5
        })
          .end((err,res) => {
            expect(res).to.have.status(400)
            done();
          });
      });

      it("adds 6th review successfully", (done) => {
        chai
          .request(index)
          .post('/api/reviews')
          .send({
            "name": "SRK",
            "title": "Tiger",
            "rating": 5
        })
          .end((err,res) => {
            expect(res).to.have.status(200)
            expect(res.body).to.deep.equals({
              "name": "SRK",
              "rating": 5,
              "category": "Viewer"
          });
            done();
          });
      });

      it("adds 7th review successfully", (done) => {
        chai
          .request(index)
          .post('/api/reviews')
          .send({
            "name": "SRK",
            "title": "Metro",
            "rating": 7
        })
          .end((err,res) => {
            expect(res).to.have.status(200)
            expect(res.body).to.deep.equals({
              "name": "SRK",
              "rating": 14,
              "category": "Critic"
          });
            done();
          });
      });

      it('gives average review score in year 2006', (done) => {
        chai.request(index)
            .get('/api/reviews/year/2006')
            .end((err, res) => {
              expect(res).to.have.status(200)
              expect(res.body).to.deep.equals({
                "Avg_rating": "7.3"
            });
              done();
            });
      });

      it('gives average review score for Don movie', (done) => {
        chai.request(index)
            .get('/api/reviews/movie/don')
            .end((err, res) => {
              expect(res).to.have.status(200)
              expect(res.body).to.deep.equals({
                "Avg_rating": "5.3"
            });
              done();
            });
      });

      it('lists top n movies by total review score by critics in a Romance genre', (done) => {
        chai.request(index)
            .get('/api/reviews/topRated/3/romance')
            .end((err, res) => {
              expect(res).to.have.status(200)
              expect(res.body).to.deep.equals([
                {
                    "movie": "Metro",
                    "totalReview": 14
                }
            ]);    
              done();
            });
      });
    });