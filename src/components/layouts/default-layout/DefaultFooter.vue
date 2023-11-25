<template>
  <footer class="footer">
    <div class="footer__grid">
      <div class="footer__services footer__nav">
        <h4 class="footer__title">Services</h4>
        <ul class="footer__list">
          <li class="footer__-item">
            <a href="#" class="footer__link">Control Panel</a>
          </li>
          <li class="footer__-item">
            <a href="#" class="footer__link">Incorporatiion</a>
          </li>
          <li class="footer__item">
            <a href="#" class="footer__link">Accounting</a>
          </li>
        </ul>
      </div>
      <div class="footer__explore footer__nav">
        <h4 class="footer__title">Explore</h4>
        <ul class="footer__list">
          <li class="footer__item">
            <a href="#" class="footer__link">Pricing</a>
          </li>
          <li class="footer__explore-item">
            <a href="#" class="footer__link">Blog</a>
          </li>
          <li class="footer__explore-item">
            <a href="#" class="footer__link">Press kit</a>
          </li>
        </ul>
      </div>
      <div class="footer__legal footer__nav">
        <h4 class="footer__title">Legal info</h4>
        <ul class="footer__list">
          <li class="footer__item">
            <a href="#" class="footer__link">Cookies Notice</a>
          </li>
          <li class="footer__legal-item">
            <a href="#" class="footer__link">Privacy Policy</a>
          </li>
          <li class="footer__item">
            <a href="#" class="footer__link">Terms</a>
          </li>
        </ul>
      </div>
      <div class="footer__contact footer__nav">
        <h4 class="footer__title">Contact Us</h4>
        <ul class="footer__list">
          <li class="footer__item">
            <a href="https://www.facebook.com/" class="footer__link">Facebook</a>
          </li>
          <li class="footer__item">
            <a href="mailto:support@enty.io" class="footer__link">support@enty.io</a>
          </li>
          <li class="footer__item">
            <a href="tel:9261581153" class="footer__link">+7 926 158-11-53</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer__additional">
      <address class="footer__address">
        <span>14772172 Tornimäe tn 5, 10145, Tallinn, Harju maakond. Register №16080939</span>
      </address>
      <aside class="footer__license">
        Developed with ❤ by Entytech OÜ and Digirepresent Services OÜ (license № FIU000382)
      </aside>
      <aside class="footer__payment">
        <span class="footer__payment-span">We accept </span>
        <img src="@/assets/images/visa.svg" alt="" class="footer__img-visa" />
        <img src="@/assets/images/mastercard.svg" alt="" class="footer__img-mastercard" />
      </aside>
    </div>
  </footer>
</template>
<script setup></script>
<style scoped lang="scss">
.footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: $black;
  color: $gray-dark;
  padding-top: 15px;

  @include breakpoints-up(x-small) {
    flex-direction: row;
    padding: 15px 15px 0 15px;
  }

  @include breakpoints-up(small) {
    padding: 15px 25px 0 15px;
  }

  @include breakpoints-up(medium) {
    padding: 15px 70px 0 70px;
  }

  &__grid {
    flex: 2.5;
    display: grid;
    gap: 2px;
    grid-template-columns: 1fr 1fr;
    padding-bottom: 15px;

    @include breakpoints-up(small) {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  &__title {
    padding-bottom: 10px;
    color: $white;
  }

  &__additional {
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 10px;
    width: 100%;
  }

  &__link {
    color: $gray-dark;
    text-decoration: none;
    padding-bottom: 20px;
  }
}
</style>
