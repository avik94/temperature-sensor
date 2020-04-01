<template>
  <v-container fluid>
    <v-card>
      <v-card-title>
        <v-chip class="ma-2" color="teal" text-color="white">
          <v-avatar left>
            <v-icon>mdi-checkbox-marked-circle</v-icon>
          </v-avatar>
          24 HOURS LOGS
        </v-chip>
      </v-card-title>
      <!-- <v-row>
        <v-col size="12">
          
        </v-col>
      </v-row> -->
      <v-row>
        <v-col cols="3">
          <v-select
            v-model="tempUnit"
            :items="tempUnitList"
            prepend-icon="mdi-settings"
            label="Temperature Unit"
          ></v-select>
        </v-col>
        <v-col cols="3">
          <v-select
            v-model="timeZone"
            :items="timeZoneList"
            prepend-icon="mdi-settings"
            label="Time Zone"
          ></v-select>
        </v-col>
        <v-col cols="3">
          <div class="my-2">
            <v-btn color="primary" @click="submitDataForm()">Submit</v-btn>
          </div>
        </v-col>
      </v-row>  
      <v-row v-if="showTable">
        <v-col cols="12">
          <v-data-table
            :headers="headers"
            :items="tableData"
            :single-expand="singleExpand"
            :expanded.sync="expanded"
            item-key="gate"
            show-expand
            :search="search"
            >
          <template v-slot:expanded-item="{ headers, item }">
            <table>
              <tr>
                <th>Event Time</th>
                <th>Measured Temperature</th>
              </tr>
              <tr v-for="i in item.eventTime" :key="i.time">
                <td>{{ i.time }}</td>
                <td>{{i.temp}}</td>
              </tr>
            </table>
          </template>
          </v-data-table>
        </v-col>
      </v-row>  
    </v-card>
    <!-- <v-card> -->
      <!-- <v-text-field v-model="search" label="Search" single-line hide-details></v-text-field> -->
      
    <!-- </v-card> -->
  </v-container>
</template>

<script lang="ts" src = "./Details.ts">
</script>