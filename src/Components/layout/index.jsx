import PropTypes from 'prop-types'

const Layout = ({ children }) => {

  Layout.propTypes = {
    children: PropTypes.node.isRequired,
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {children}
    </div>
  )
}

export default Layout;
