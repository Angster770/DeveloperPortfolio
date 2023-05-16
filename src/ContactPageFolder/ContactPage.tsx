import React, { useState, ChangeEvent, FormEvent } from "react"
import { Typography, TextField, Button, Grid } from "@mui/material"
import { styled } from "@mui/system"
import { client } from "../apollo/apollo"
import { IntroGrid, IntroParagraph } from "../LandingPage/MainPage"
import { RiMailFill } from "react-icons/ri"
import { IoChevronForward } from "react-icons/io5"

const ContactPageContainer = styled(Grid)`
  background-color: #fcfcf9;
  color: #1fb7fc;
  font-family: Comic Sans, monospace;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem; /* Add margin-bottom for spacing */

  /* Large screens */
  @media (min-width: 56.25rem) {
    /* Styles for screens 900px and above */
    flex-basis: 100%;
    max-width: 100%;
    margin-bottom: 0; /* Remove margin-bottom for spacing */
  }
`

export const ContactPage = () => {
  return (
    <>
      <ContactPageContainer>
        <Typography style={{ fontFamily: "Helvetica Neue, sans-serif" }}>
          <a href="mailto:angster770@gmail.com">
            Reach out to me at my email <IoChevronForward />
            <RiMailFill />
          </a>
        </Typography>
      </ContactPageContainer>
    </>
  )
}
// CONTACT PAGE
// const RootContainer = styled("div")({
//   color: "#1FB7FC",
//   padding: "2rem",
//   borderRadius: "8px",
//   width: "50%",
//   margin: "0 auto",
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
//   gap: "1rem",
//   "& .MuiTextField-root": {
//     width: "100%",
//   },
//   "& .MuiButton-root": {
//     backgroundColor: "#1FB7FC",
//     color: "#fcfcf9",
//     borderRadius: "12px",
//     textTransform: "none",
//     marginTop: "1rem",
//   },
// })

// interface ContactFormValues {
//   name: string
//   email: string
//   message: string
// }

// export const ContactPage: React.FC = () => {
//   const [formValues, setFormValues] = useState<ContactFormValues>({
//     name: "",
//     email: "",
//     message: "",
//   })

//   const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target
//     setFormValues((prevValues) => ({
//       ...prevValues,
//       [name]: value,
//     }))
//   }

//   const handleSubmit = (e: FormEvent) => {
//     e.preventDefault()
//     // Here you can add your logic to handle form submission
//     console.log("Name:", formValues.name)
//     console.log("Email:", formValues.email)
//     console.log("Message:", formValues.message)
//     // Reset the form
//     setFormValues({
//       name: "",
//       email: "",
//       message: "",
//     })
//   }

//   return (
//     <RootContainer>
//       <Typography variant="h4" align="center" gutterBottom>
//         Contact Page
//       </Typography>
//       <form onSubmit={handleSubmit}>
//         <Grid container spacing={2}>
//           <Grid item xs={12}>
//             <TextField label="Name" name="name" value={formValues.name} onChange={handleInputChange} required />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               label="Email"
//               name="email"
//               type="email"
//               value={formValues.email}
//               onChange={handleInputChange}
//               required
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               label="Message"
//               name="message"
//               multiline
//               rows={4}
//               value={formValues.message}
//               onChange={handleInputChange}
//               required
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <Button variant="contained" type="submit" fullWidth>
//               Submit
//             </Button>
//           </Grid>
//         </Grid>
//       </form>
//     </RootContainer>
//   )
// }
