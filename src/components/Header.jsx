import { Link } from "react-router-dom";

export default function Header({
  heading,
  paragraph,
  linkName,
  linkUrl = "#",
}) {
  return (
    <div className="mb-10">
      <div className="flex justify-center">
        <img
          alt=""
          className="h-14 w-14"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE6ElEQVR4nO1bzY8URRQvo2CMgnGnC7Zr8B/woAcOxnVxhZj4GaMhhLMg61bNkcQ1HvQmi9k18awmUzVB41wwEvQA8WOqZ4PiESMeWSRGDUoAE3aq2DavP9Zhemb7Y7urh2Ve8pJNde37+PV7v3pdm0VoJAihndObsM0WLEL/xIS5JtUi7A9s03mIobR3gW06bzrxCBA2fb80ACx4C14gdMK0b2yzybASUOkA2GzSuG97ZpcPAP3dtO9VsQg7WnoLEHoElSY7pzdZhM2Vm/y796CyBQcBbVR/sYJHALBRBeBRC7ARB6CEUiEzL2PCWhah10DhZ1gbVs7JNSCL0CNrzPfv5e3PiOCEAeFx9lwwOS5jm75ZebhGQLFNZ70171nt2bz8GROcMCDLZqf8JOlsxAaA4H3csFN5+Ru+CrDZFdgHb733mVcJfnX8nZe/4asAwv4aBMDYjjeqST9ubmMA6NeDW4C9FTw7mZc/Y4ITBrSN0GcwYSsBCc72IcGVSnVmT1J/61KbXoIPOfTIvs3GAMj7GMzni5LNJfGZKCAUIzDsrHV/CM8sUnspqz+4nwze7gdx6+GNElRCumxTBNQtVpW9gAm9GST6hTVOp7ZvP3w/aKVaexrb7MvAjoZ5AaX3dxcm7AKsbyO1JxKs58clOMaQbU9b4RHYjwBDsWz2dngUbt1xcCyNP0guWL8AScetJ4k7seAYQ2Fi8OZjbdn0RBxQ/fxBeQfgLSRZD+8UjbQAJuxHD4BxOhVnq1Klu/2JkJ4xQ4I53CniOABsdtnbg9kDcbYqlQNbgjd2ecMcgzhlr+Vtr3DBIwBYKRUghT4rheo4Qrt5KNjybPLO5G1RAU5OiUeUq+uLdbeaGgBsWAsDwANBv3NHAyCFPpsaAGRAvm+4thEAuFpJ3AbYIAAO14eMtABoQ79eOgBS6GlHqF+lUDfDwIwB8D8paoern9tCv2YUAIfrQ/0CMg5Al/YFAcd/DLXTEpxFqJRcnff7UR9oNt27ZV29ahqAllCveL6FPhisnUsPAKEyA8u3pFBXwem3x1zLrwj1uWkAJFefge/WJy4O2uFaagCyiuT6dBDICaeudkuh/u0GIG9/t/ruTAYJX28LtUcKfTKoxtORzUUF1KovPyq5ujKIA1CB4jQ6u6IVof6RYvmxyOYiA3I+dYnD9fHSSZDr4wPnAlwgAF996N4LxFM2AFKoXxab7n2ZALAyngLwu5Kro4NawGgF+HzQ/wodF3QKtETncW8IGR4ANMSE0gKQVRyhvxu2QUgK/Y1BANSNaBBqaRWAj90tMKiEA9P6VC05Qu0Fm2vbVTcMAhANcvEjd6zXnzzmPuQn4O9ri85E4nO+y25kT4/dUFGJAOzt9ie5uijr6nkvWKH3rZZpgiutW8953267oV6UQv02yG4EACsDuw+bPjUx77WSlyxXF7urAtbONNytgwEgmdh9qHTqyYU1Afip6T4Y2wJFSa9jICZYh/L0g1VLLaG8P6Q6XO/PygFJ7ZYOgOTqPBBT774fuFuB3s3KAUntlg6AE5QmEBP0pleeXO/vF2SWYzCpXWRKJFeX8hpg8lIABZkSmL3LTrhPpZj7D5VzTXczgDAMleDFwNUcxITKkCRBDqPt3GQEgLjDK0DG8MB62LlI2wZPhOzsXKTtwk+EPNi5SNtoo8p/C+4AuBNOCQcAAAAASUVORK5CYII="
        />
      </div>
      <h2 className="mt-6 text-center text-3xl font-extrabold text-[#fff]">
        {heading}
      </h2>
      <p className="mt-2 text-center text-sm text-stone-50	 ">
        {paragraph}{" "}
        {/* <Link
          to={linkUrl}
          className="font-medium text-purple-600 hover:text-purple-500"
        >
          {linkName}
        </Link> */}
      </p>
    </div>
  );
}
