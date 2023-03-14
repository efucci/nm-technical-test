<script setup>
import MainContainer from '@/components/MainContainer.vue'
import TabDate from '@/components/TabDate.vue'
import ProgramBox from '@/components/ProgramBox.vue'
import ChannelList from '@/components/ChannelList.vue'
import { onMounted, onUnmounted, computed, ref } from 'vue'
import { useStore } from 'vuex'
import { shiftByTime, scrollToNow } from '@/utils.js'

const INTERVAL_TIME = 60000 // 1 minute
let interval = null

const store = useStore()
const loading = computed(() => store.getters.fetchChannelsLoading)
const activeTab = ref(0)
const timeline = ref(null)
const yellowline = ref(null)

const tabs = [-3,-2,-1,0,1,2,3]

function addDays (date, days) {
  return date.setDate(date.getDate() + days)
}
const hours = [];
for(let i=0; i < 24; i++) {
  hours.push((i < 10 ? "0" : "") + i + ":00");
}
const channels = computed(() => store.state.channels)

onMounted(async () => {
  await store.dispatch('fetchChannels')
  shiftByTime(yellowline.value) // init yellow line position
  scrollToNow(timeline.value, yellowline.value.offsetLeft) //init timeline view based on y.l. position
  // start setInterval for yellow line moving
  if (!interval) {
    interval = setInterval(function () {
      shiftByTime(yellowline.value)
    }, INTERVAL_TIME)
  }
})

onUnmounted (() => {
  console.log('unmounted ')
  clearInterval(interval)
  interval = null
})
</script>

<template>
  <MainContainer :loading="loading">
    <div>
      <div class="container">
        <div class="tabs-container">
          <div v-for="day in tabs" :key="day" class="tab" @click="activeTab=day" :class="{'selected': activeTab === day }">
            <TabDate :currentDate="addDays(new Date(), day)" />
          </div>
        </div>
        <div v-if="activeTab === 0" class="tab-content">
          <ChannelList />
          <div class="timeline" ref="timeline">
            <div class="yellow-line" ref="yellowline"></div>
            <div class="time-labels">
              <div v-for="hour in hours" class="label">{{ hour }}</div>
            </div>
            <div v-for="channel in channels" :key="channel.id" class="channel-rows">
              <ProgramBox v-for="program in channel.schedules" :program="program"/>
            </div>
          </div>
          <button class="now-btn" @click="scrollToNow(timeline, yellowline.offsetLeft)"><strong>NOW</strong></button>
        </div>
        <div v-else>
          No timeline avaible
        </div>          
      </div>
    </div>
  </MainContainer>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  width: 100%;
  text-align: center;
  flex-direction: column;
  box-sizing: border-box;
}
.tabs-container {
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: $dark-gray;
  overflow: auto;

  .tab {
    padding: 0.5rem 1rem;
    min-width: 100px;
    cursor: pointer;
    text-align: center;

    &:hover {
      background-color: orange;
    }
    &.selected {
      background-color: gray;
    }
  }
}

.tab-content {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  position: relative;
  .now-btn {
    position: absolute;
    border-radius: 10px;
    background-color: darkgoldenrod;
    color: white;
    padding: .5rem 1rem;
    border: none;
    right: 50px;
    bottom: 50px;
  }
  .timeline {
    width: 100vw;
    overflow: scroll;
    position: relative;
    .time-labels {
      width: fit-content;
      display: flex;
      flex-direction: row;
      border: 1px solid $light-gray;
      background-color: $dark-gray;
      padding: 0.5rem 0;
      .label {
        min-width: 200px;
      }
    }
    .channel-rows {
      height: $box_height;
      display: flex;
      flex-direction: row;
    }
  }
}

.yellow-line {
  min-height: 100%;
  width: 3px;
  position: absolute;
  left: 0;
  background-color: darkgoldenrod;
}
</style>