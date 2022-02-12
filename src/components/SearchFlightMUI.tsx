import * as React from 'react'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Stack from '@mui/material/Stack'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import DesktopDatePicker from '@mui/lab/DesktopDatePicker'
import { trpc } from '@/utils/trpc'
import { TypographyProps } from '@mui/system'
import { useCallback } from 'react'
const { useContext } = trpc

const theme = createTheme()

const Copyright = (props: TypographyProps) => (
  <Typography variant="body2" color="text.secondary" align="center" {...props}>
    {'Copyright © '}
    <Link color="inherit" href="https://mui.com/">
      Your Website
    </Link>{' '}
    {new Date().getFullYear()}
    {'.'}
  </Typography>
)

const SearchFlight = () => {
  const { client } = useContext()
  const [date, setDate] = React.useState<Date | null>(new Date(Date.now()))

  const handleChange = useCallback((newDate: Date | null) => {
    setDate(newDate)
  }, [])

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      const data = new FormData(event.currentTarget)

      const locations = await client.query('amadeus.get-location', 'LON')
      console.log(locations)
    },
    [client]
  )

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography component="h1" variant="h3">
            Send me away!
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} mt={3}>
            <Grid container spacing={2} alignItems="center" justifyContent="center">
              <Grid item xs={12} sm={6}>
                <TextField
                  name="origin"
                  fullWidth
                  id="origin"
                  label="Origin"
                  autoFocus
                  InputLabelProps={{
                    shrink: false,
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="destination"
                  fullWidth
                  id="destination"
                  label="Destination"
                  autoFocus
                  InputLabelProps={{
                    shrink: false,
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={8}>
                <TextField
                  id="number-adults"
                  label="Adults"
                  name="numberAdults"
                  type="number"
                  defaultValue={1}
                  InputProps={{ inputProps: { min: 1 } }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  fullWidth
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <Stack spacing={3}>
                    <DesktopDatePicker
                      label="Departure Date"
                      className="departureDate"
                      inputFormat="dd/MM/yyyy"
                      value={date}
                      onChange={handleChange}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </Stack>
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12} sm={6}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <Stack spacing={3}>
                    <DesktopDatePicker
                      label="Return Date"
                      className="returnDate"
                      inputFormat="dd/MM/yyyy"
                      value={date}
                      onChange={handleChange}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </Stack>
                </LocalizationProvider>
              </Grid>
            </Grid>
            <Box
              mt={3}
              mb={2}
              p={1}
              component={(props) => <Button {...props} type="submit" fullWidth variant="outlined" />}
            >
              Search Flights
            </Box>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  )
}

export default SearchFlight
