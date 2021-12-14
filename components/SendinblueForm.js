const SendinblueForm = () => {
    return (
        <div className="sib-form" style="text-align: center;
         background-color: #EFF2F7;                                           ">
  <div id="sib-form-container" className="sib-form-container">
    <div id="sib-container" className="sib-container--large sib-container--vertical" style="text-align:center; background-color:rgba(255,255,255,1); max-width:540px; border-radius:3px; border-width:1px; border-color:#C0CCD9; border-style:solid;">
      <form id="sib-form" method="POST" action="https://429c8f9b.sibforms.com/serve/MUIEAN0ny4nCo3dYSC4r-K3lrYN14smZ9D_cdQuep5KY9Ba8DLn6i8m1L1F6ISBFTDbqva7u5d1_8gAfCv6D1dq9CF94g-aLjMSuyg2m5WOpTgQUZb_UVqBLVF9KeJsYXGcKHrH381_rZ5zt8iKxWpKogGZsx3DlyLoqYug4W60crk_4zvn1utByQLExuESZRgJBGK4_hZufvfig">
        <div style="padding: 8px 0;">
          <div className="sib-form-block" style="font-size:32px; text-align:left; font-weight:700; font-family:&quot;Helvetica&quot;, sans-serif; color:#3C4858; background-color:transparent;">
            <p>hyper-targeted React content</p>
          </div>
        </div>
        <div style="padding: 8px 0;">
          <div className="sib-form-block" style="font-size:16px; text-align:left; font-family:&quot;Helvetica&quot;, sans-serif; color:#3C4858; background-color:transparent;">
            <div className="sib-text-form-block">
              <p>Want to build a SaaS or work in a high-paying job, then subscribe and you'll receive top tier content to your email!</p>
            </div>
          </div>
        </div>
        <div style="padding: 8px 0;">
          <div className="sib-input sib-form-block">
            <div className="form__entry entry_block">
              <div className="form__label-row ">
                <label className="entry__label" style="font-size:16px; text-align:left; font-weight:700; font-family:&quot;Helvetica&quot;, sans-serif; color:#3c4858;" for="EMAIL" data-required="*">
                  Enter your email address to subscribe
                </label>

                <div className="entry__field">
                  <input className="input" type="text" id="EMAIL" name="EMAIL" autocomplete="off" placeholder="EMAIL" data-required="true" required />
                </div>
              </div>

              <label className="entry__error entry__error--primary" style="font-size:16px; text-align:left; font-family:&quot;Helvetica&quot;, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:3px; border-color:#ff4949;">
              </label>
              <label className="entry__specification" style="font-size:12px; text-align:left; font-family:&quot;Helvetica&quot;, sans-serif; color:#8390A4;">
                Provide your email address to subscribe. For e.g abc@xyz.com
              </label>
            </div>
          </div>
        </div>
        <div style="padding: 8px 0;">
          <div className="sib-form-block" style="text-align: left">
            <button className="sib-form-block__button sib-form-block__button-with-loader" style="font-size:16px; text-align:left; font-weight:700; font-family:&quot;Helvetica&quot;, sans-serif; color:#FFFFFF; background-color:#3E4857; border-radius:3px; border-width:0px;" form="sib-form" type="submit">
              <svg className="icon clickable__icon progress-indicator__icon sib-hide-loader-icon" viewBox="0 0 512 512">
                <path d="M460.116 373.846l-20.823-12.022c-5.541-3.199-7.54-10.159-4.663-15.874 30.137-59.886 28.343-131.652-5.386-189.946-33.641-58.394-94.896-95.833-161.827-99.676C261.028 55.961 256 50.751 256 44.352V20.309c0-6.904 5.808-12.337 12.703-11.982 83.556 4.306 160.163 50.864 202.11 123.677 42.063 72.696 44.079 162.316 6.031 236.832-3.14 6.148-10.75 8.461-16.728 5.01z" />
              </svg>
              SUBSCRIBE
            </button>
          </div>
        </div>
        <input type="text" name="email_address_check" value="" className="input--hidden">
        <input type="hidden" name="locale" value="en">
        <input type="hidden" name="html_type" value="simple">
      </form>
    </div>
  </div>
</div>
    )
}