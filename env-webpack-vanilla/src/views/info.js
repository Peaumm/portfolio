import photo from '../assets/photo.jpg';
import css from '../assets/css.png';
import html from '../assets/html.png';
import js from '../assets/js.png';
import java from '../assets/java.svg';
import mysql from '../assets/mysql.svg';
import php from '../assets/php.png';
import python from '../assets/python.png';

export default () => (`
  <div class="bg-gray-50 py-24 sm:py-32">
    <div class="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
      <p class="mx-auto mt-2 max-w-lg text-pretty text-center text-4xl font-medium tracking-tight text-gray-950 sm:text-5xl">A propos de moi</p>
      <div class="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
        <div class="relative lg:row-span-2">
          <div class="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
          <div class="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
            <div class="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
              <p class="text-7xl text-lg/7 font-medium tracking-tight text-gray-950 max-lg:text-center">Front-end</p>
            </div>
            <div class="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
              <img class="max-w-32 mx-auto" src="${html}"></img>
              <p class="mt-2 text-lg/7 font-medium tracking-tight text-gray-950 text-center text-2xl">HTML</p>
            </div>
            <div class="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
              <img class="max-w-32 mx-auto" src="${css}"></img>
              <p class="mt-2 text-lg/7 font-medium tracking-tight text-gray-950 text-center text-2xl">CSS</p>
            </div>
            <div class="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
              <img class="max-w-32 mx-auto" src="${js}"></img>
              <p class="mt-2 text-lg/7 font-medium tracking-tight text-gray-950 text-center text-2xl">JavaScript</p>
            </div>
          </div>
          <div class="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]"></div>
        </div>
        <div class="relative max-lg:row-start-1">
          <img class="choose-img" src="${photo}"></img>
        </div>
        <div class="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
          <div class="absolute inset-px rounded-lg bg-white"></div>
          <div class="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
            <div class="px-8 pt-8 sm:px-10 sm:pt-10">
              <p class="mt-2 text-lg/7 font-medium tracking-tight text-gray-950 max-lg:text-center">A propos de moi</p>
              <p class="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                Etudiant en Bachelor Concepteur et Développeur d’Applications chez
                Coda et passionné d’informatique, j’aimerais devenir après mes
                études développeur Back-end.</p>
            </div>
          </div>
          <div class="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
        </div>
        <div class="relative lg:row-span-2">
          <div class="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
          <div class="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
            <div class="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
              <p class="mt-2 text-lg/7 font-medium tracking-tight text-gray-950 max-lg:text-center">Back-end</p>
            </div>
            <div class="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
              <img class="max-w-32 mx-auto" src="${php}"></img>
              <p class="mt-2 text-lg/7 font-medium tracking-tight text-gray-950 text-center text-2xl">PHP</p>
            </div>
            <div class="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
              <img class="max-w-32 mx-auto" src="${mysql}"></img>
              <p class="mt-2 text-lg/7 font-medium tracking-tight text-gray-950 text-center text-2xl">MySQL</p>
            </div>
            <div class="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
              <img class="max-w-32 mx-auto" src="${java}"></img>
              <p class="mt-2 text-lg/7 font-medium tracking-tight text-gray-950 text-center text-2xl">Java</p>
            </div>
            <div class="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
              <img class="max-w-32 mx-auto" src="${python}"></img>
              <p class="mt-2 text-lg/7 font-medium tracking-tight text-gray-950 text-center text-2xl">Python</p>
            </div>
          </div>
          <div class="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
        </div>
      </div>
    </div>
  </div>
  `
);
