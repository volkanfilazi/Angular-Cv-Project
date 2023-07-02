import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToolsService {
  toolsArray = [
    {
      toolName: 'Javascript',
      image: 'M8.5 7.5A1.5 1.5 0 0 1 10 6h1.5a.5.5 0 0 1 0 1H10a.5.5 0 0 0-.5.5V8a.5.5 0 0 0 .5.5h.5A1.5 1.5 0 0 1 12 10v.5a1.5 1.5 0 0 1-1.5 1.5H9a.5.5 0 0 1 0-1h1.5a.5.5 0 0 0 .5-.5V10a.5.5 0 0 0-.5-.5H10A1.5 1.5 0 0 1 8.5 8v-.5Zm-.5-1a.5.5 0 0 0-1 0v4a.5.5 0 0 1-.5.5h-1a.5.5 0 0 0 0 1h1A1.5 1.5 0 0 0 8 10.5v-4Zm-6-2A2.5 2.5 0 0 1 4.5 2h7A2.5 2.5 0 0 1 14 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5v-7ZM4.5 3A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3h-7Z'
    },
    {
      toolName: 'Vue',
      image: 'M2.717 1H.5a.5.5 0 0 0-.432.752l7 12a.5.5 0 0 0 .864 0l7-12A.5.5 0 0 0 14.5 1h-2.217L7.5 8.972L2.717 1Z'
    },
    {
      toolName: 'Node',
      image: 'M21.3 6a.3.3 0 0 0-.3.3v5.497l-1.246-.727a.499.499 0 0 0-.508 0l-2.994 1.746a.504.504 0 0 0-.252.436v3.496c0 .18.096.346.252.436l2.994 1.746a.499.499 0 0 0 .508 0l2.994-1.746a.504.504 0 0 0 .252-.436V7.23a.501.501 0 0 0-.248-.431l-1.303-.758A.295.295 0 0 0 21.301 6zm-9.8 5.002a.506.506 0 0 0-.254.068l-2.994 1.746a.504.504 0 0 0-.252.436v3.496c0 .18.096.346.252.436l2.994 1.746c.157.09.35.09.508 0l2.994-1.746a.504.504 0 0 0 .252-.436v-3.496a.502.502 0 0 0-.252-.436l-2.994-1.746a.506.506 0 0 0-.254-.068zm16 0a.499.499 0 0 0-.254.068l-2.994 1.746a.504.504 0 0 0-.252.436v3.496c0 .18.096.346.252.436l2.904 1.755a.498.498 0 0 0 .51.004l1.428-.83a.224.224 0 0 0 0-.386L26 15.904V14.11l1.5-.873l1.5.873v1.25c0 .167.14.193.234.137a544.12 544.12 0 0 1 1.518-.883a.5.5 0 0 0 .248-.431v-.93a.502.502 0 0 0-.252-.436l-2.994-1.746a.502.502 0 0 0-.254-.068zm-24 .002a.499.499 0 0 0-.254.068L.252 12.816a.507.507 0 0 0-.252.438v4.463c0 .218.236.353.424.244l1.328-.773A.501.501 0 0 0 2 16.756v-2.643l1.5-.875l1.5.875v2.643a.5.5 0 0 0 .248.431l1.328.774A.282.282 0 0 0 7 17.717v-4.463a.507.507 0 0 0-.252-.438l-2.994-1.744a.499.499 0 0 0-.254-.068zm16 2.232l1.5.875v1.778l-1.5.875l-1.5-.875V14.11l1.5-.875zm8 .768l-.857.5v.998L27.5 16l.857-.498v-.998l-.857-.5zm-12.094 3.994a.605.605 0 0 0-.297.076L12.297 19.7a.586.586 0 0 0-.297.512v3.246c0 .209.117.406.297.512l.74.422c.355.175.486.175.647.175c.53 0 .832-.317.832-.877v-3.207a.082.082 0 0 0-.082-.084h-.356a.084.084 0 0 0-.084.084v3.207c0 .243-.257.493-.676.284l-.77-.444a.09.09 0 0 1-.042-.074V20.21c0-.029.014-.063.043-.078l2.812-1.621a.091.091 0 0 1 .088 0l2.815 1.62c.029.016.043.045.043.079v3.246a.093.093 0 0 1-.043.078l-2.815 1.627a.091.091 0 0 1-.088 0l-.718-.428c-.02-.01-.05-.015-.069-.005a1.684 1.684 0 0 1-.424.195c-.049.015-.115.045.026.123l.933.555a.642.642 0 0 0 .297.078a.545.545 0 0 0 .293-.082l2.813-1.627a.586.586 0 0 0 .297-.512v-3.246a.603.603 0 0 0-.297-.512l-2.813-1.625a.584.584 0 0 0-.293-.076zm4.387 1.498a.54.54 0 1 0 .002 1.08a.54.54 0 0 0-.002-1.08zm-.006.086c.254 0 .46.2.46.453a.467.467 0 0 1-.46.46a.456.456 0 0 1-.451-.46a.45.45 0 0 1 .451-.453zm-.197.147v.607h.115v-.242h.108c.044 0 .054.018.064.052c0 .005.018.163.023.192h.125a.715.715 0 0 1-.029-.162c-.014-.078-.018-.132-.101-.137c.044-.015.117-.038.117-.15c0-.161-.14-.16-.213-.16h-.21zm.115.097h.098c.03 0 .088 0 .088.082c0 .034-.015.09-.094.088h-.092v-.17zm-3.545.496c-.803 0-1.28.343-1.28.907c0 .618.478.783 1.247.86c.92.093.992.225.992.405c0 .316-.254.447-.848.447c-.745 0-.908-.184-.962-.554c-.005-.04-.04-.069-.084-.069h-.366a.082.082 0 0 0-.082.084c0 .472.258 1.037 1.489 1.037c.903 0 1.414-.35 1.414-.964c0-.608-.41-.77-1.276-.887c-.876-.117-.963-.176-.963-.381c0-.17.072-.393.72-.393c.578 0 .794.127.882.516c.01.04.037.063.076.063h.365c.024 0 .045-.01.059-.024c.015-.019.024-.038.02-.062c-.058-.672-.502-.985-1.403-.985z'
    },
    {
      toolName: 'Java',
      image: 'M9.37 17.51c-3.09.86 1.87 2.64 5.8 1a7.18 7.18 0 0 1-1.1-.54a11.59 11.59 0 0 1-4.16.18c-1.31-.15-.54-.64-.54-.64zm5.33-1.68a16.27 16.27 0 0 1-5.36.26c-1.31-.14-.45-.77-.45-.77c-3.4 1.12 1.89 2.4 6.64 1a2.25 2.25 0 0 1-.83-.49zm1.82-9.73s-6.87 1.71-3.59 5.49a1.47 1.47 0 0 1-.25 2.12s2.46-1.27 1.33-2.86s-1.86-2.22 2.51-4.75z"/><path fill="white" d="M18.13 19.14s.56.46-.63.82c-2.27.69-9.43.9-11.42 0c-.72-.31.62-.74 1-.83a2.54 2.54 0 0 1 .69-.08c-.8-.56-5.15 1.1-2.21 1.58c8.05 1.37 14.64-.56 12.57-1.49zm-2.76-4.88a7 7 0 0 1 .92-.49s-1.51.27-3 .4a28.11 28.11 0 0 1-4.82.05C6.09 13.91 9.74 13 9.74 13a6.81 6.81 0 0 0-3.16.75c-2.06 1.03 5.09 1.48 8.79.51zm.91 2.44a.39.39 0 0 1-.08.09c5-1.32 3.18-4.65.78-3.81a.71.71 0 0 0-.33.25s.14-.05.43-.12c1.22-.25 2.92 1.63-.8 3.59zM12 13c-.74-1.67-3.26-3.14 0-5.71C16.09 4.08 14 2 14 2c.84 3.31-3 4.31-4.34 6.37c-.93 1.41.47 2.92 2.34 4.63z"/><path fill="white" d="M16.41 21.32a29.75 29.75 0 0 1-9.14.14s.46.38 2.84.53c3.61.23 9.15-.12 9.29-1.83c0 0-.26.64-2.99 1.16z'
    },
    {
      toolName: 'Kotlin',
      image: 'mdi:language-kotlin'
    },
    {
      toolName: 'MongoDB',
      image: 'fontisto:mongodb'
    },
    {
      toolName: 'Typescript',
      image: 'mdi:language-typescript'
    },
    {
      toolName: 'Tailwind',
      image: 'file-icons:tailwind'
    },
    {
      toolName: 'Html',
      image: 'icomoon-free:html-five'
    },
    {
      toolName: 'GIT',
      image: 'ph:git-branch-bold'
    },

    // Diğer araçlar...
  ];
  constructor() { }
}
