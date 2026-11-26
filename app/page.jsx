import Image from 'next/image';
import { site } from '../site.config';
import logo from './icon.png';

const { appName, developer, contactEmail } = site;

const sections = [
  ['summary', 'The short version'],
  ['who', 'Who we are'],
  ['collect', 'Information we collect'],
  ['device', 'Information kept on your device'],
  ['backups', 'Device backups'],
  ['permissions', 'App permissions'],
  ['third-parties', 'Third parties and links'],
  ['retention', 'Keeping and deleting your information'],
  ['security', 'Security'],
  ['children', 'Children'],
  ['rights', 'Your rights'],
  ['health', 'Wellbeing, not medical advice'],
  ['website', 'This website'],
  ['changes', 'Changes to this policy'],
  ['contact', 'Contact us'],
];

function Section({ id, children }) {
  const title = sections.find(([key]) => key === id)[1];
  const number = sections.findIndex(([key]) => key === id) + 1;
  return (
    <section id={id} aria-labelledby={`${id}-title`}>
      <h2 id={`${id}-title`}>
        <span className="number">{number}</span>
        {title}
      </h2>
      {children}
    </section>
  );
}

function Contact() {
  if (contactEmail) {
    return (
      <p>
        Email us at <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
      </p>
    );
  }
  return (
    <p>
      Use the developer contact email shown on the {appName} listing on Google
      Play.
    </p>
  );
}

export default function PrivacyPolicy() {
  return (
    <main>
      <header>
        <Image src={logo} alt="" width={76} height={76} priority unoptimized />
        <p className="brand">{appName}</p>
        <h1>Privacy Policy</h1>
        <p className="dates">
          Effective {site.effectiveDate} · Last updated {site.lastUpdated}
        </p>
      </header>

      <p className="lead">
        This policy explains how the {appName} mobile app for Android (package
        name <code>{site.packageName}</code>) handles information. {appName} is a
        sleep and relaxation app with stories, meditations, calming sounds and
        breathing exercises.
      </p>

      <nav aria-label="Contents">
        <h2>Contents</h2>
        <ol>
          {sections.map(([id, title]) => (
            <li key={id}>
              <a href={`#${id}`}>{title}</a>
            </li>
          ))}
        </ol>
      </nav>

      <Section id="summary">
        <ul className="highlights">
          <li>You do not need an account to use {appName}.</li>
          <li>
            We do not collect, receive, sell or share your personal information.
          </li>
          <li>There are no ads, analytics tools or tracking technologies.</li>
          <li>
            What the app remembers, such as your favorites and streaks, is stored
            on your own device.
          </li>
          <li>
            The app does not request permission to access the internet. Its audio
            and content are included in the app.
          </li>
        </ul>
      </Section>

      <Section id="who">
        <p>
          {appName} is published by {developer} (“we”, “us”). If you have a
          question about this policy, see <a href="#contact">Contact us</a>.
        </p>
      </Section>

      <Section id="collect">
        <p>
          <strong>We do not collect personal information through the app.</strong>{' '}
          The app does not ask for your name, email address, phone number,
          location, contacts, photos, health records or payment details, and it
          does not use an advertising identifier. Nothing you do in the app is
          sent to us or to any server of ours.
        </p>
      </Section>

      <Section id="device">
        <p>
          To work the way you expect, the app saves the following in its private
          storage on your device:
        </p>
        <div className="table">
          <table>
            <thead>
              <tr>
                <th scope="col">What is saved</th>
                <th scope="col">Why</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Favorites</td>
                <td>To show the sessions you saved.</td>
              </tr>
              <tr>
                <td>
                  Listening and breathing history, including when and how long
                </td>
                <td>To show “Continue” and suggest what to try next.</td>
              </tr>
              <tr>
                <td>Daily streaks and mindful minutes</td>
                <td>To show your progress.</td>
              </tr>
              <tr>
                <td>Program progress and completion dates</td>
                <td>To unlock the next day of a program.</td>
              </tr>
              <tr>
                <td>
                  Your goal chosen at first launch, theme, language, volume, low
                  blue light, breathing sound and reminder time
                </td>
                <td>To remember your preferences.</td>
              </tr>
              <tr>
                <td>Temporary copies of audio files bundled with the app</td>
                <td>To play them.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>We have no access to this information.</p>
      </Section>

      <Section id="backups">
        <p>
          If device backup is turned on, Android may include the app’s saved
          information in the backup linked to your Google account, so it can be
          restored when you reinstall the app or move to a new device. That backup
          is run by Google under{' '}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google’s Privacy Policy
          </a>
          . We cannot see or access it. You can turn backup off in your device
          settings.
        </p>
      </Section>

      <Section id="permissions">
        <div className="table">
          <table>
            <thead>
              <tr>
                <th scope="col">Permission</th>
                <th scope="col">What it is used for</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Notifications</td>
                <td>
                  To show playback controls and, only if you switch it on, a
                  daily reminder. Reminders are scheduled on your device. You can
                  turn them off in the app or in system settings.
                </td>
              </tr>
              <tr>
                <td>Foreground service for media playback</td>
                <td>
                  To keep audio playing, with controls, while the screen is off or
                  you use another app.
                </td>
              </tr>
              <tr>
                <td>Keep device awake (wake lock)</td>
                <td>To stop playback being cut off while audio is playing.</td>
              </tr>
              <tr>
                <td>Vibration</td>
                <td>For notification and touch feedback.</td>
              </tr>
              <tr>
                <td>View network state</td>
                <td>
                  Added by a standard audio playback component. It only allows
                  checking whether a connection exists and does not let the app
                  send or receive data.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          The app does not request access to your camera, microphone, location,
          contacts or files.
        </p>
      </Section>

      <Section id="third-parties">
        <p>
          The app contains no third-party advertising, analytics or crash
          reporting services.
        </p>
        <ul>
          <li>
            <strong>Helpline link.</strong> “Find a helpline” in Settings opens{' '}
            <a
              href="https://findahelpline.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              findahelpline.com
            </a>{' '}
            in your web browser. That website is independent and has its own
            privacy practices.
          </li>
          <li>
            <strong>Google Play.</strong> Google handles app downloads and updates
            and may collect information under its own privacy policy. Google Play
            may show developers combined statistics, such as install and crash
            figures, depending on your device settings.
          </li>
        </ul>
      </Section>

      <Section id="retention">
        <p>
          Saved information stays on your device until you delete it. You can:
        </p>
        <ul>
          <li>
            use <strong>Settings → Reset local data</strong> to erase favorites,
            history, streaks and program progress;
          </li>
          <li>
            clear the app’s storage in your device settings, or uninstall the app,
            to remove everything it saved on the device;
          </li>
          <li>
            manage or delete any device backup through your Google account
            settings.
          </li>
        </ul>
        <p>
          Because we hold no copy of your information, there is nothing for you to
          ask us to delete on our side, and no account to close.
        </p>
      </Section>

      <Section id="security">
        <p>
          Saved information is kept in the app’s private storage, which Android
          protects from other apps. Keeping your device locked and up to date
          helps protect it. No method of storage can be guaranteed to be
          completely secure.
        </p>
      </Section>

      <Section id="children">
        <p>
          The app includes classic stories that families may enjoy. We do not
          knowingly collect personal information from anyone, including children.
          If you believe a child has sent us personal information, for example by
          email, contact us and we will delete it.
        </p>
      </Section>

      <Section id="rights">
        <p>
          Depending on where you live, laws such as the GDPR or the CCPA may give
          you rights to access, correct, delete or object to the use of your
          personal information. We do not collect your personal information
          through the app, and we do not sell or share it. If you contact us, we
          use your message and email address only to reply, keep them no longer
          than needed for that, and delete them on request. You may also complain
          to your local data protection authority.
        </p>
      </Section>

      <Section id="health">
        <p>
          {appName} is a wellness tool. It is not a medical device and does not
          diagnose or treat any condition. It is not a substitute for professional
          care. If you are in crisis or in danger, contact your local emergency
          number or a helpline.
        </p>
      </Section>

      <Section id="website">
        <p>
          This policy website does not use cookies, analytics or tracking scripts.
          It is hosted by Netlify, which may process technical information such as
          your IP address and browser type to deliver and secure the site, as
          described in{' '}
          <a
            href="https://www.netlify.com/privacy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Netlify’s privacy policy
          </a>
          .
        </p>
      </Section>

      <Section id="changes">
        <p>
          We may update this policy when the app or the law changes. The latest
          version will always be on this page with a new “last updated” date. If a
          future version of the app collects personal information, we will update
          this policy before that happens.
        </p>
      </Section>

      <Section id="contact">
        <Contact />
      </Section>

      <footer>
        © {new Date().getFullYear()} {developer}. All rights reserved.
      </footer>
    </main>
  );
}
