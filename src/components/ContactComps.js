import "../css/Contact.css";

const ContactComps = () => {
  return (
    <section className="her mt-5">
      <div className="container">
        <div id="kontak" class="contact">
          <div class="container">
            <div class="contact-box">
              <div class="box">
                <h1>Kontak Kami</h1>
                <div class="form-contact">
                  <form action="https://formspree.io/f/xbjnjqne" method="POST">
                    <table>
                      <tr>
                        <td>
                          <input
                            type="text"
                            name="First Name"
                            placeholder="Nama Depan"
                            required
                            autocomplete="off"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            name="Lash Name"
                            placeholder="Nama Belakang"
                            autocomplete="off"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td colspan="2">
                          <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            required
                            autocomplete="off"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td colspan="2">
                          <textarea
                            name="text"
                            cols="30"
                            rows="10"
                            placeholder="Pesan"
                            required
                          ></textarea>
                        </td>
                      </tr>
                      <tr>
                        <td colspan="2">
                          <button
                            type="submit"
                            value="send"
                            onclick="return confirm"
                            className="btn-contact btn btn-primary"
                          >
                            Kirim
                          </button>
                        </td>
                      </tr>
                    </table>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactComps;
