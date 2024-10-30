import { Container, Box, TextField, Button, Typography } from "@mui/material";

const ContactPage = () => {
  return (
    <Container maxWidth="lg">
\      {/* Main Content */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginY: 4 }}>
        {/* Banner Section */}
        <Box
          sx={{
            width: { xs: '100%', md: '50%' },
            backgroundColor: "#57C4F3",
            padding: 4,
            borderRadius: "8px",
            color: "white",
            textAlign: "center",
          }}
        >
          <Typography variant="h4" gutterBottom>
            Liên Hệ
          </Typography>
          <img
            src="https://graaentreprises.com/images/contact.png" 
            alt="Contact"
            style={{ width: "100%", maxHeight: "200px", objectFit: "cover", marginBottom: "10px" }}
          />
          <Typography>contact@e-comm.ng</Typography>
          <Typography>+234 4556 6666 34</Typography>
          <Typography>279 Đ. Nguyễn Tri Phương, Phường 5, Quận 10, Hồ Chí Minh </Typography>
        </Box>

        {/* Contact Form Section */}
        <Box
          sx={{
            width: { xs: '100%', md: '50%' },
            padding: 4,
            marginLeft: { md: 4 },
            border: "1px solid #ddd",
            borderRadius: "8px",
          }}
        >
          <Typography variant="h4" sx={{ marginBottom: 4 }}>
            Liên Hệ
          </Typography>
          <form>
            <TextField
              label="Họ và Tên"
              variant="outlined"
              fullWidth
              required
              sx={{ marginBottom: 2 }}
            />
            <TextField
              label="Email"
              type="email"
              variant="outlined"
              fullWidth
              required
              sx={{ marginBottom: 2 }}
            />
            <TextField
              label="Nội Dung"
              variant="outlined"
              fullWidth
              required
              multiline
              rows={4}
              sx={{ marginBottom: 2 }}
            />
            <Button type="submit" variant="contained" color="primary">
              Gửi
            </Button>
          </form>
        </Box>
      </Box>

      {/* Search Bar */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 4,
        }}
      >
        <TextField
          label="Nhập sản phẩm tìm kiếm"
          variant="outlined"
          sx={{ width: '60%' }}
        />
        <Button variant="contained" color="primary" sx={{ marginLeft: 2 }}>
          Tra cứu
        </Button>
      </Box>

    </Container>
  );
};

export default ContactPage;
