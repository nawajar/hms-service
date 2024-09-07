<template>
  <div class="flex h-screen w-full">
    <div class="flex w-1/2 flex-col">
      <div class="flex w-full items-center justify-between bg-gray-300 p-2">
        <span> เพลย์กราวด์ </span>
        <button class="rounded bg-blue-500 px-2 text-white" @click="exportPDF">PDF</button>
      </div>
      <div>
        <v-ace-editor
          v-model:value="content"
          :options="{
            fontSize: 8
          }"
          lang="javascript"
          theme="tomorrow_night_eighties"
          style="height: 500px"
        />
      </div>
      <div>
        <p class="text-base">ທດສອບ</p>
        <p class="font-bold">ທດສອບ</p>
        <p class="text-xl">ທດສອບ</p>
        <p class="font-bold">ທດສອບ</p>
      </div>
    </div>
    <div id="iframeContainer" class="w-1/2">
      <iframe id="pdfview" class="size-full"></iframe>
    </div>
  </div>
</template>
<script>
import './ace-config'

import pdfMake from 'pdfmake'
import { VAceEditor } from 'vue3-ace-editor'

import { exampleContent, play } from './play'

export default {
  name: 'PlayGround',
  components: {
    VAceEditor
  },
  data() {
    return {
      content: exampleContent
    }
  },
  mounted() {
    this.exportPDF()
  },
  methods: {
    exportPDF() {
      let docDefinition = play(this.content)
      pdfMake.fonts = {
        IBM: {
          normal: `${window.location.origin}/font/IBM_Plex_Sans_Thai/IBMPlexSansThai-Regular.ttf`,
          bold: `${window.location.origin}/font/IBM_Plex_Sans_Thai/IBMPlexSansThai-Bold.ttf`
        },
        NOTO: {
          normal: `${window.location.origin}/font/Noto_Sans_Lao/static/NotoSansLao-Regular.ttf`,
          bold: `${window.location.origin}/font/Noto_Sans_Lao/static/NotoSansLao-Medium.ttf`
        }
      }
      const pdfDocGenerator = pdfMake.createPdf(docDefinition)
      pdfDocGenerator.getDataUrl((dataUrl) => {
        const targetElement = document.querySelector('#pdfview')
        targetElement.src = dataUrl
      })
    }
  }
}
</script>
