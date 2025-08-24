function Layout(props) {
  return (
    <main className="flex flex-col">
        {props.children}
    </main>
  );
}

export default Layout;
