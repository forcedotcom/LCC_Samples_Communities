<template>
  <div>
    <div class="dataContainer"> 
      <el-card>
        <div slot="header" style="padding: 10px">
          <span>Data from SFDC</span>
          <el-button  v-on:click="getSfdcData" type="primary" style="float: right; margin-left: 5px">
            Get SFDC Data
          </el-button>
          <el-button v-if="sfdcData.length" v-on:click="uploadSalesforceDataToS3" style="float: right;" type="warning">
            Upload to S3
          </el-button>
          <el-button v-if="!sfdcData.length" disabled style="float: right;" type="warning">
            Upload to S3
          </el-button>
        </div>     
        <ElementTable :tableData="sfdcData" />
      </el-card>
    </div>
    <div class="dataContainer">
      <el-card>
         <div slot="header" style="padding: 10px">
          <span>Data from S3</span>
          <el-button v-on:click="downloadSalesforceDataFromS3" style="float: right; background-color: #E6A23C; color: white; ">
            Download from S3
          </el-button>
        </div>
        <ElementTable :tableData="s3Data" />
      </el-card>
    </div>
  </div>
</template>

<script>
import { Storage } from 'aws-amplify'
import LCC from 'lightning-container'
import ElementTable from './ElementTable.vue'

export default {
  name: 'SFDCS3',
  components: {
    ElementTable
  },
  data(){
    return {
      sfdcData: [],
      s3Data: [],
    }
  },
  methods: {
    getSfdcData: function() {
      LCC.callApex(
        'RecordController.getAccounts',
        (accounts, event) => {
          if (event.status) {
            this.sfdcData = accounts
          } else if (event.type === 'exception') {
            console.log(event.message + ' : ' + event.where)
          } else {
            console.log('Unknown Error', event)
          }
      })
    },
    uploadSalesforceDataToS3: function() {
      Storage.put('data/data.json', JSON.stringify(this.sfdcData))
        .then (result => console.log(result))
        .catch(err => console.log(err))
    },
    downloadSalesforceDataFromS3: function() {
      Storage.get('data/data.json')
        .then (url => {
          const http = new XMLHttpRequest();
          http.open("GET", url);
          http.send();
          http.onreadystatechange=(e)=>{
            this.s3Data = JSON.parse(http.responseText)
          };
        })
        .catch(err => console.log(err))
    }
  }
}
</script>

<style>
.dataContainer {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;  
}
</style>
