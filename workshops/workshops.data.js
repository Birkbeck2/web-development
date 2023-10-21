import { outline, filterClassMeeting } from '../outline.js'

export default {
  load () {
    return {
      data: filterClassMeeting(outline, '/workshops/')
    }
  }
}
