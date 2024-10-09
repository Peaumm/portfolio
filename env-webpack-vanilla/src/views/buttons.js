import CV from '../assets/CV_maxence_fouquet.pdf';

export default () => (`
  <div class="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8 flex justify-around mb-14">
    <a href="https://www.linkedin.com/in/maxence-fouquet/" target="_blank" class="shadow-lg hover:shadow-inner rounded-md bg-blue-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">LinkedIn</a>
    <a href="https://github.com/Peaumm" target="_blank" class="shadow-lg hover:shadow-inner rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">GitHub</a>
    <a href="${CV}" class="shadow-lg hover:shadow-inner rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white" download>Télécharger mon CV</a>
    <a href="mailto:maxence.fouquet@gmail.com" class="shadow-lg hover:shadow-inner button rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Envoyer un mail</a>
  </div>
  `
);
