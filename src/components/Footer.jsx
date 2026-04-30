export default function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Jacob Boyce. All rights reserved.</p>
      <p className="footer-attribution">
        Web development icon by{' '}
        <a href="https://thenounproject.com/browse/icons/term/web-development/" target="_blank" rel="noreferrer" title="web development Icons">
          Febri Ardianto from Noun Project
        </a>{' '}
        (CC BY 3.0)
      </p>
    </footer>
  )
}
