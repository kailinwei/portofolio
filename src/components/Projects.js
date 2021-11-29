import styled from "styled-components";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const Container = styled.div`
height:100vh
width:100%;
display:flex;
flex-direction:column;
align-items: center;
justify-content: center;
gap:3%;
margin:auto;
margin-top:3vh;
margin-bottom:3vh;
`;


const ProjectHolder = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 3% 3%;
  margin:auto;
  margin-bottom: 5%;
`;

const Title = styled.div`
font-style: normal;
font-weight: 800;
font-size: 36px;
line-height: 44px;
color: #2F2E4C;
margin-bottom:2vh;
`



export default function Projects() {
    return (
      <Container>
        <idspProject>
          <Title>Here are my projects</Title>
        </idspProject>

        <h2>Hackathon projects</h2>
        <ProjectHolder>
          <Card sx={{ maxWidth: 480 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="300"
                image="/images/farmerce.png"
                alt="Hackathon project"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Hackathon Winner of the Best Social Impact: Farmerce
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Farmerce is a marketplace that connect BC farmers with BC
                  restaurants professionals. We are here to provide a reliable
                  e-commerace trading platform for farmers and resturant chiefs,
                  so they trade directly, conveniently, and safely.
                </Typography>
                <br />
                <Typography>
                  JavaScript, Node.js, Jquery, CSS, HTML, Github, Figma
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                style={{
                  borderRadius: 60,
                  color: "#2F2E4C",
                  borderColor: "#2F2E4C",
                }}
                variant="outlined"
                size="small"
                color="primary"
                href="https://farmerce-2021.herokuapp.com/"
                target="_blank"
              >
                Check the Website
              </Button>
            </CardActions>
          </Card>

          <Card sx={{ maxWidth: 480 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="300"
                image="/images/embrace.png"
                alt="Embrace Hackathon"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Hackathon: Embrace
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Embrace is a website that offer services and programs through
                  various online programs, such as workshops and seminars. We
                  are a group of women who are from, or have parents who were
                  from other parts of the world. We understand the challenges of
                  adjusting to living in a foreign place. Hence, we strive to
                  make the transition easier.
                </Typography>
                <br />
                <Typography>
                  JavaScript, Node.js, Jquery, CSS, HTML, Github, Figma
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                style={{
                  borderRadius: 60,
                  color: "#2F2E4C",
                  borderColor: "#2F2E4C",
                }}
                variant="outlined"
                size="small"
                color="primary"
                href="embrace-foundation2021.herokuapp.com"
                alt="Lead to the the website"
                target="_blank"
              >
                Check the Website
              </Button>
            </CardActions>
          </Card>
        </ProjectHolder>

        <h2>Here are my School IDSP projects</h2>
        <ProjectHolder>
          <Card sx={{ maxWidth: 480 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="300"
                image="/images/mindful.png"
                alt="IDSP Mindful"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                IDSP: Mindful
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Mindful is focused on managing the user's mental health which
                  includes emotions and well-being. It is a companion that
                  encourages improving and maintaining one’s mental state in a
                  healthy approach using mindful reflections. This app however,
                  is not focused on fixing people’s mental illnesses but rather
                  a way to help prevent it.
                </Typography>
                <br />
                <Typography>
                  Next.js, JavaScript, Node.js, MySql, Github, Figma
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                style={{
                  borderRadius: 60,
                  color: "#2F2E4C",
                  borderColor: "#2F2E4C",
                }}
                variant="outlined"
                size="small"
                color="primary"
                href="https://idsp3380-client.herokuapp.com/"
                alt="Lead to the the website"
                target="_blank"
              >
                Check the Website
              </Button>
            </CardActions>
          </Card>

          <Card sx={{ maxWidth: 480 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="300"
                image="/images/Flirtigo.png"
                alt="Flirtigo IDSP"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  IDSP: Flirtigo
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Flirtigo is a matchmaking application specifically for busy
                  college/university students. This app allows for users to
                  login with their student email (eliminating the concern of
                  catfishes or bots) and search for matches on or close to their
                  campus. Besides simple looks, users can match based on similar
                  interests or program category.
                </Typography>
                <br />
                <Typography>
                  Next.js, JavaScript, Node.js, Mongoose, Github, Figma
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                style={{
                  borderRadius: 60,
                  color: "#2F2E4C",
                  borderColor: "#2F2E4C",
                }}
                variant="outlined"
                size="small"
                color="primary"
                href="https://flirtigo.herokuapp.com/"
                target="_blank"
              >
                Check the Website
              </Button>
            </CardActions>
          </Card>
          </ProjectHolder>

<ProjectHolder>
          <Card sx={{ maxWidth: 480 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="300"
                image="/images/Mekawei.png"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Design: Makewei
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  We provide luxury bubble tea services for people who want a
                  place to relax or hold private conferences. We have a
                  meticulously curated menu using fresh, organic and health
                  conscious recipes approved by dieticians.
                </Typography>
                <br />
                <Typography>
                  JavaScript, Node.js, HTML, CSS, Github, Figma
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                style={{
                  borderRadius: 60,
                  color: "#2F2E4C",
                  borderColor: "#2F2E4C",
                }}
                variant="outlined"
                size="small"
                color="primary"
                href=""
                target="_blank"
              >
                Check the Website
              </Button>
            </CardActions>
          </Card>
        </ProjectHolder>
      </Container>
    );
}
