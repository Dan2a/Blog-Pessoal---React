import {
  FacebookLogoIcon,
  GithubLogoIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
} from "@phosphor-icons/react";

function Footer() {
  let data = new Date().getFullYear();

  return (
    <>
      <div className="flex justify-center bg-indigo-900 text-white">
        <div className="container flex flex-col items-center py-4">
          <p className="text-xl font-bold">
            Blog Pessoal Daniel Andrade | Copyright: {data}
          </p>
          <p className="text-lg">Acesse nossas redes sociais</p>
          <div className="flex gap-2">
            <a href="https://www.linkedin.com/in/d2aa1303/" target="_blank">
              <LinkedinLogoIcon size={48} weight="bold" />
            </a>
            <a href="https://www.instagram.com/dan_2a/" target="_blank">
              <InstagramLogoIcon size={48} weight="bold" />
            </a>
            <a href="https://github.com/Dan2a" target="_blank">
              <GithubLogoIcon size={48} weight="bold" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
