import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  getStats() {
    return {
      totalUsers: 12847,
      pageViews: 84291,
      bounceRate: 32.4,
      avgSession: "4m 12s",
      weeklyViews: [
        { name: "Mon", views: 4000 },
        { name: "Tue", views: 3000 },
        { name: "Wed", views: 5200 },
        { name: "Thu", views: 4800 },
        { name: "Fri", views: 6100 },
        { name: "Sat", views: 3900 },
        { name: "Sun", views: 2800 },
      ],
    };
  }
}
